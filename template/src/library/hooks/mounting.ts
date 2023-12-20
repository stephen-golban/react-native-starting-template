import { useCallback, useEffect, useRef, useState } from 'react';

function useUnmount(callback: () => void) {
  return useEffect(() => () => callback(), []);
}

function useMount(callback: () => void) {
  return useEffect(callback, []);
}

function useForceUpdate() {
  const unloadingRef = useRef(false);

  const [forcedRenderCount, setForcedRenderCount] = useState(0);

  useUnmount(() => (unloadingRef.current = true));

  return useCallback(() => {
    !unloadingRef.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
}

function useMounted(callback: () => void, deps: any[] = []) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      callback();
    }
  }, [...deps]);
}

export { useUnmount, useMount, useForceUpdate, useMounted };
