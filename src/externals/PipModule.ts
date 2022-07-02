import { NativeModules } from 'react-native';

const { PipModule } = NativeModules;

export type IPipModule = {
  enter: () => Promise<boolean>;
  setParams: (pipOptions: PipOptions) => Promise<boolean>;
  detach: () => Promise<boolean>;
};

export const ON_PIP_CHANGE = 'ON_PIP_CHANGE';

export type IPipChangeParams = {
  isPipMode: boolean;
};

export type PipOptions = {
  autoOpen: boolean;
  aspectRatio: {
    numerator: number;
    denominator: number;
  };
  autoEnterEnabled: boolean;
  seamlessResize: boolean;
};

export default PipModule as IPipModule;
