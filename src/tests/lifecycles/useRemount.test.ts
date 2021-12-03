import { act, renderHook } from '@testing-library/react-hooks';
import { useRemount } from '../../index';

describe('Should work correctly', () => {
  it('Should be defined', () => {
    expect(useRemount).toBeDefined();
  });

  it('Should increase key value, when call onRemount once', () => {
    const { result } = renderHook(() => useRemount());

    act(() => {
      result.current.onRemount();
    });

    expect(result.current.key).toBe(1);
  });
});
