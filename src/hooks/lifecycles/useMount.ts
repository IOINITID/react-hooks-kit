import { useEffect } from 'react';

/** Hook that execute function when component mount */
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, [callback]);
};
