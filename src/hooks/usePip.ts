import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';

import PipModule, { IPipChangeParams, ON_PIP_CHANGE, PipOptions } from 'externals/PipModule';

/**
 * LifeCycle
 *
 * ------------------      ---------------       --------      ---------      --------------------
 * | init listeners | ---> | init params | --->  | open | ---> | close | ---> | remove listeners |
 * ------------------      ---------------       --------      ---------      --------------------
 */

type UsePip = [boolean, () => Promise<boolean>];

export default function usePip(options?: Partial<PipOptions>): UsePip {
  const pipOptions = useMemo<PipOptions>(
    () =>
      ({
        autoOpen: false,
        aspectRatio: {
          numerator: 1,
          denominator: 1,
        },
        autoEnterEnabled: true,
        seamlessResize: false,
        ...options,
      } as PipOptions),
    [options]
  );

  const autoOpenRef = useRef<boolean>(false);

  const [isPipOpen, setPipOpen] = useState<boolean>(false);

  const open = useCallback(async (): Promise<boolean> => {
    return PipModule.enter();
  }, []);

  useEffect(() => {
    PipModule.setParams(pipOptions).then(() => {
      if (pipOptions.autoOpen && !autoOpenRef.current) {
        open().then(() => {
          autoOpenRef.current = true;
        });
      }
    });
  }, [pipOptions, open]);

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.PipModule);
    const pipListener = eventEmitter.addListener(
      ON_PIP_CHANGE,
      ({ isPipMode }: IPipChangeParams) => {
        setPipOpen(isPipMode);
      }
    );

    return () => {
      pipListener.remove();
      // eventEmitter.removeAllListeners(ON_PIP_CHANGE);
      PipModule.detach();
    };
  }, []);

  return [isPipOpen, open];
}
