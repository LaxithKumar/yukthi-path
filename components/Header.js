/**
 * Header — Screen header with title, optional subtitle, and right action.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors, Typography, Spacing } from '../constants/theme';

export default function Header({ title, subtitle, rightAction, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {rightAction && <View style={styles.action}>{rightAction}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: Typography.size['2xl'],
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.regular,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  action: {
    marginLeft: Spacing.md,
  },
});
