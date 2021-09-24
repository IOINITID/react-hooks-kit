import { useState } from 'react';

/** Hook that remount component */
export const useRemount = () => {
  const [key, setKey] = useState(0);

  /** Handler for remount component */
  const onRemount = () => {
    setKey(key + 1);
  };

  return { key, onRemount };
};
