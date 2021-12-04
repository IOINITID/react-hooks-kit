import { useState } from 'react';

/** Hook that helps to manage the states */
export const useSetState = <T>(
  initial: T = {} as T
): { state: T; setState: (state: Partial<T> | ((prevState: T) => Partial<T>)) => void } => {
  const [state, setState] = useState<T>(initial);

  return {
    state,
    setState: (state) =>
      setState((prevState) => {
        return typeof state === 'function' ? { ...prevState, ...state(prevState) } : { ...prevState, ...state };
      }),
  };
};
