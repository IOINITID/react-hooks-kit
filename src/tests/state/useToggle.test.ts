import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '../../index';

describe('Should work correctly', () => {
  it('Should be defined', () => {
    expect(useToggle).toBeDefined();
  });

  it('Should return isEnabled to be false', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.isEnabled).toBeFalsy();
  });

  it('Should return isEnabled to be false', () => {
    const { result } = renderHook(() => useToggle({ initialIsEnabled: false }));

    expect(result.current.isEnabled).toBeFalsy();
  });

  it('Should return isEnabled to be true', () => {
    const { result } = renderHook(() => useToggle({ initialIsEnabled: true }));

    expect(result.current.isEnabled).toBeTruthy();
  });

  it('Should return isEnabled to be true after onToggle call', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isEnabled).toBeTruthy();
  });

  it('Should return isEnabled to be false after onToggle call', () => {
    const { result } = renderHook(() => useToggle({ initialIsEnabled: true }));

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isEnabled).toBeFalsy();
  });
});
