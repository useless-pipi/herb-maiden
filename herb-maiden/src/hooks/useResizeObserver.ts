// hooks/useResizeObserver.ts
import { useEffect, useRef, useState, useCallback } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';

interface Size {
  width: number;
  height: number;
}

interface UseResizeObserverOptions {
  onResize?: (size: Size, entry: ResizeObserverEntry) => void;
  debounceDelay?: number;
}

export function useResizeObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseResizeObserverOptions = {}
) {
  const { onResize, debounceDelay = 100 } = options;
  const ref = useRef<T>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const observerRef = useRef<ResizeObserver | null>(null);

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      if (!entries.length) return;
      
      const entry = entries[0];
      const { width, height } = entry.contentRect;
      const newSize = { width: Math.round(width), height: Math.round(height) };
      
      setSize(newSize);
      onResize?.(newSize, entry);
    },
    [onResize]
  );

  useEffect(() => {
    if (!ref.current) return;

    observerRef.current = new ResizeObserver(handleResize);
    observerRef.current.observe(ref.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [handleResize]);

  return { ref, size, width: size.width, height: size.height };
}