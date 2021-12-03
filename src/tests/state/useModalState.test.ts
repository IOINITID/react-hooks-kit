import { act, renderHook } from '@testing-library/react-hooks';
import { useModalState } from '../../index';

describe('Should work correctly', () => {
  it('Should be defined', () => {
    expect(useModalState).toBeDefined();
  });

  it('Should return isOpen to be false', () => {
    const { result } = renderHook(() => useModalState());

    expect(result.current.isOpen).toBeFalsy();
  });

  it('Should return isOpen to be false', () => {
    const { result } = renderHook(() => useModalState({ initialIsOpen: false }));

    expect(result.current.isOpen).toBeFalsy();
  });

  it('Should return isOpen to be true', () => {
    const { result } = renderHook(() => useModalState({ initialIsOpen: true }));

    expect(result.current.isOpen).toBeTruthy();
  });

  it('Should return isOpen to be true after onOpen call', () => {
    const { result } = renderHook(() => useModalState({ initialIsOpen: false }));

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toBeTruthy();
  });

  it('Should return isOpen to be false after onClose call', () => {
    const { result } = renderHook(() => useModalState({ initialIsOpen: true }));

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBeFalsy();
  });

  it('Should return isOpen to be true after onToggle call', () => {
    const { result } = renderHook(() => useModalState({ initialIsOpen: false }));

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isOpen).toBeTruthy();
  });
});
