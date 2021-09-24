import { useRef } from 'react';

/** Hook that counts component renders */
export const useRenderCount = (componentName?: string | undefined) => {
  const renderCount = useRef(0);

  renderCount.current++;

  if (componentName) {
    return {
      renderCount: `(${componentName}) component renders: ${renderCount.current}`,
    };
  }

  return { renderCount: renderCount.current };
};
