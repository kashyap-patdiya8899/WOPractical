import { useEffect, useState } from 'react';

/**
 * Delays updating a value until the specified delay has passed.
 * 
 * @param {T} value Value to debounce.
 * @param {number} delay Delay in milliseconds.
 * 
 * @returns {T} Debounced value that updates after the delay.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
