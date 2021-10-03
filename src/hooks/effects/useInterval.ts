import { useEffect, useRef } from 'react';

/** Hook that call function with interval */
export const useInterval = (callback: () => void, interval: number, stop?: number) => {
  const startValue = useRef(0);
  const stopValue = useRef(stop);

  useEffect(() => {
    const setIntervalCallback = () => {
      if (stopValue.current && startValue.current < stopValue.current) {
        startValue.current++;

        callback();
      }
    };

    const handleSetInterval = setInterval(setIntervalCallback, interval);

    return () => {
      startValue.current = 0;
      stopValue.current = stop;

      clearInterval(handleSetInterval);
    };
  }, [callback, interval, stop]);
};
