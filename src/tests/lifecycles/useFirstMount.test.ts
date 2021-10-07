import { renderHook } from '@testing-library/react-hooks';
import { useFirstMount } from '../../index';

describe('Should work correctly', () => {
  it('Should be defined', () => {
    expect(useFirstMount).toBeDefined();
  });

  it('Should return isFirstMount is true on mount', () => {
    const { result } = renderHook(() => useFirstMount());
    const { isFirstMount } = result.current;

    expect(isFirstMount).toBeTruthy();
  });

  it('Should return isFirstMount is true on unmount', () => {
    const { result, unmount } = renderHook(() => useFirstMount());

    unmount();

    const { isFirstMount } = result.current;

    expect(isFirstMount).toBeTruthy();
  });

  it('Should return isFirstMount is false on rerender', () => {
    const { result, rerender } = renderHook(() => useFirstMount());

    rerender();

    const { isFirstMount } = result.current;

    expect(isFirstMount).toBeFalsy();
  });
});
