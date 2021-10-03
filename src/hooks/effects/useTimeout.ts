import { useEffect } from 'react';

/** Hook that call function by timeout */
export const useTimeout = (callback: () => void, timeout: number) => {
  useEffect(() => {
    const handlerSetTimeout = setTimeout(callback, timeout);

    return () => clearTimeout(handlerSetTimeout);
  }, [callback, timeout]);
};
