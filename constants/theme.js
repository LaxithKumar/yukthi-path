/**
 * Yukthi Path — Design System Tokens
 * 
 * Central source of truth for all colors, typography, spacing,
 * radii, and shadow values used across the application.
 */

export const Colors = {
  // Backgrounds
  bgPrimary: '#0F172A',       // Deep navy — main background
  bgSecondary: '#1E293B',     // Dark slate — card/surface background
  bgTertiary: '#334155',      // Slate 700 — elevated surfaces

  // Accents
  accentBlue: '#4A90D9',      // Soft blue — primary accent
  accentTeal: '#2DD4BF',      // Teal — secondary accent
  accentIndigo: '#818CF8',    // Indigo — tertiary accent
  accentCyan: '#22D3EE',      // Cyan — highlights

  // Gradients (start, end)
  gradientBlue: ['#4A90D9', '#6366F1'],
  gradientTeal: ['#2DD4BF', '#06B6D4'],
  gradientIndigo: ['#818CF8', '#A78BFA'],
  gradientWarm: ['#F59E0B', '#F97316'],
  gradientRose: ['#FB7185', '#F43F5E'],

  // Text
  textPrimary: '#F1F5F9',     // Near white — headings, body
  textSecondary: '#94A3B8',   // Slate 400 — secondary text
  textMuted: '#64748B',       // Slate 500 — hints, placeholders
  textInverse: '#0F172A',     // For light backgrounds

  // Semantic
  success: '#34D399',
  warning: '#FBBF24',
  error: '#F87171',
  info: '#38BDF8',

  // Borders & Dividers
  border: '#334155',
  borderLight: '#475569',
  divider: 'rgba(148, 163, 184, 0.12)',

  // Overlay
  overlay: 'rgba(15, 23, 42, 0.7)',

  // Tab bar
  tabBarBg: '#0F172A',
  tabActive: '#2DD4BF',
  tabInactive: '#64748B',

  // White for icons/badges
  white: '#FFFFFF',
  black: '#000000',
};

export const Typography = {
  // Font families (using system fonts — no custom font loading required)
  fontFamily: {
    regular: 'System',
    medium: 'System',
    semiBold: 'System',
    bold: 'System',
  },

  // Font sizes
  size: {
    xs: 11,
    sm: 13,
    md: 15,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },

  // Font weights
  weight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  full: 9999,
};

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  glow: (color) => ({
    shadowColor: color,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  }),
};

export default {
  Colors,
  Typography,
  Spacing,
  BorderRadius,
  Shadows,
};
