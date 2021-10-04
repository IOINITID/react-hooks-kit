import { useRef } from 'react';

/** Hook that return is first render or not */
export const useFirstMount = () => {
  const isFirstMount = useRef(true);

  if (isFirstMount.current) {
    isFirstMount.current = false;
  }

  return { isFirstMount: isFirstMount.current };
};
