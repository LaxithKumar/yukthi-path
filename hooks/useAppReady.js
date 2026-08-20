/**
 * useAppReady — Hook for managing app readiness state (fonts, splash).
 */
import { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function useAppReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Add any async initialization here (font loading, etc.)
        // For now, just a brief delay for splash screen
        await new Promise((resolve) => setTimeout(resolve, 300));
      } catch (e) {
        console.warn('App preparation error:', e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  return { isReady, onLayoutRootView };
}
