import { useState } from 'react';

/** Hook that helps to manage the states of toggle elemnts */
export const useToggle = ({ initialIsEnabled = false } = {}) => {
  const [isEnabled, setIsEnabled] = useState(initialIsEnabled);

  /** Handler for toggle element */
  const onToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return { isEnabled, onToggle };
};
