import { useState } from 'react';

/** Hook that helps to manage the states of a modal */
export const useModalState = ({ initialIsOpen = false } = {}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  /** Handler for set modal open */
  const onOpen = () => {
    setIsOpen(true);
  };

  /** Handler for set modal close */
  const onClose = () => {
    setIsOpen(false);
  };

  /** Handler for toggle modal */
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, onOpen, onClose, onToggle };
};
