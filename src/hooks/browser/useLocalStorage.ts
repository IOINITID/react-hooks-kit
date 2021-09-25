import { useState } from 'react';

/** Hook that help to use localStorage browser API */
export const useLocalStorage = <T>({ key, initialValue }: { key: string; initialValue?: T | undefined }) => {
  /** Handler for read value from localStorage */
  const readValue = (): T | undefined => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);

      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T | undefined>(readValue);

  /** Handler for set value to localStorage */
  const setValue = (value: T | unknown | undefined) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  /** Handler for remove value from localStorage */
  const removeValue = (key: string) => {
    try {
      window.localStorage.removeItem(key);

      setStoredValue(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  /** Handler for clear all values from localStorage */
  const clearAllValues = () => {
    try {
      window.localStorage.clear();

      setStoredValue(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  return { value: storedValue, setValue, removeValue, clearAllValues };
};
