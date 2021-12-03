import { renderHook } from '@testing-library/react-hooks';
import { useRenderCount } from '../../index';

describe('Should work correctly', () => {
  it('Should be defined', () => {
    expect(useRenderCount).toBeDefined();
  });

  it('Should return renderCount value and to be 1', () => {
    const { result } = renderHook(() => useRenderCount());

    expect(result.current.renderCount).toBe(1);
  });

  it('Should return renderCount value and to be (ComponentName) component renders: 1', () => {
    const { result } = renderHook(() => useRenderCount('ComponentName'));

    expect(result.current.renderCount).toBe('(ComponentName) component renders: 1');
  });

  it('Should return renderCount value and to be 2 after rerender', () => {
    const { result, rerender } = renderHook(() => useRenderCount());

    rerender();

    expect(result.current.renderCount).toBe(2);
  });
});
