import { renderHook } from '@testing-library/react-hooks';
import { useMount } from '../../index';

const mockCall = jest.fn();

afterEach(() => {
  jest.resetAllMocks();
});

describe('Should work correctly', () => {
  it('Should be defined', () => {
    expect(useMount).toBeDefined();
  });

  it('Should call useMount callback once', () => {
    renderHook(() => useMount(mockCall));

    expect(mockCall).toBeCalledTimes(1);
  });

  it('Should not call useMount callback on unmount', () => {
    const { unmount } = renderHook(() => useMount(mockCall));

    unmount();

    expect(mockCall).toBeCalledTimes(1);
  });

  it('Should not call useMount callback on rerender', () => {
    const { rerender } = renderHook(() => useMount(mockCall));

    rerender();

    expect(mockCall).toBeCalledTimes(1);
  });
});
