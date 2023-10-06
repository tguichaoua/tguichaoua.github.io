import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function usePersistentState<S>(
  key: string,
  initialState: S | (() => S),
  checkValue: (x: unknown) => x is S
): [S, Dispatch<SetStateAction<S>>] {
  const parse = (s: string) => {
    try {
      const data = JSON.parse(s) as unknown;
      return checkValue(data) ? data : initialState;
    } catch (error) {
      console.error(
        `usePersistentState: fail to parse the stored value\n${error}`
      );
      return initialState;
    }
  };

  const stored = window.localStorage.getItem(key);
  const [state, setState] = useState(stored ? parse(stored) : initialState);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
