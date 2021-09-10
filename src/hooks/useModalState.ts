import { useState } from 'react';

/** Hook that helps to manage the states of a modal */
export const useModalState = ({ initialIsOpen = false } = {}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, onOpen, onClose, onToggle };
};
