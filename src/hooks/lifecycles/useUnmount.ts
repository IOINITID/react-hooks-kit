import { useEffect } from 'react';

/** Hook that execute function when component unmount */
export const useUnmount = (callback: () => void) => {
  useEffect(() => {
    return () => callback();
  }, [callback]);
};
