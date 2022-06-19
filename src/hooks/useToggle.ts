import { useCallback, useState } from 'react';

type UseToggle = [boolean, { setTrue: () => void; setFalse: () => void; toggle: () => void }];

export default function useToggle(initialValue = false): UseToggle {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => setValue(true), []);

  const setFalse = useCallback(() => setValue(false), []);

  const toggle = useCallback(() => setValue((val) => !val), []);

  return [value, { setTrue, setFalse, toggle }];
}
