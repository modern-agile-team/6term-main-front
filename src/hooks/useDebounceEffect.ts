import { useState, useEffect } from 'react';

/**Debounce훅 : 입력 지연 */
const useDebouncedEffect = (func: string, delay: number) => {
  const [state, setState] = useState(func);

  useEffect(() => {
    const handler = setTimeout(() => setState(func), delay);
    return () => clearTimeout(handler);
  }, [func]);
  return state;
};

export default useDebouncedEffect;
