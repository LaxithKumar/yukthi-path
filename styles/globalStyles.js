/**
 * Global shared styles used throughout the application.
 */
import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';

export const globalStyles = StyleSheet.create({
  // Containers
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  screenPadding: {
    paddingHorizontal: Spacing.base,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Cards
  card: {
    backgroundColor: Colors.bgSecondary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.base,
    ...Shadows.md,
  },
  cardSmall: {
    backgroundColor: Colors.bgSecondary,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    ...Shadows.sm,
  },

  // Text Styles
  heading1: {
    fontSize: Typography.size['3xl'],
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  heading2: {
    fontSize: Typography.size['2xl'],
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  heading3: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
  },
  bodyLarge: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.regular,
    color: Colors.textPrimary,
    lineHeight: Typography.size.lg * Typography.lineHeight.normal,
  },
  bodyMedium: {
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.regular,
    color: Colors.textPrimary,
    lineHeight: Typography.size.base * Typography.lineHeight.normal,
  },
  bodySmall: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.regular,
    color: Colors.textSecondary,
    lineHeight: Typography.size.sm * Typography.lineHeight.normal,
  },
  caption: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.regular,
    color: Colors.textMuted,
  },
  label: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.medium,
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // Rows & Flex
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: Spacing.md,
  },

  // Badge
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.accentTeal + '20',
  },
  badgeText: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semiBold,
    color: Colors.accentTeal,
  },
});

export default globalStyles;
