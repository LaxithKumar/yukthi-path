/**
 * ThemeContext — Provides color palette and typography across the app.
 */
import React, { createContext, useContext, useMemo } from 'react';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const theme = useMemo(
    () => ({
      colors: Colors,
      typography: Typography,
      spacing: Spacing,
      borderRadius: BorderRadius,
      shadows: Shadows,
      isDark: true,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;
