import { renderHook } from '@testing-library/react-hooks';
import { useUnmount } from '../../index';

const mockCall = jest.fn();

afterEach(() => {
  jest.resetAllMocks();
});

describe('Should work correctly', () => {
  it('Should be defined', () => {
    expect(useUnmount).toBeDefined();
  });

  it('Should not call useUnmount on mount', () => {
    renderHook(() => useUnmount(mockCall));

    expect(mockCall).toBeCalledTimes(0);
  });

  it('Should call useUnmount callback once on unmount', () => {
    const { unmount } = renderHook(() => useUnmount(mockCall));

    unmount();

    expect(mockCall).toBeCalledTimes(1);
  });

  it('Should not call useUnmount callback on rerender', () => {
    const { rerender } = renderHook(() => useUnmount(mockCall));

    rerender();

    expect(mockCall).toBeCalledTimes(0);
  });
});
