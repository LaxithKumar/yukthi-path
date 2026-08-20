/**
 * SectionTitle — Section heading with optional "See All" action.
 */
import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Colors, Typography, Spacing } from '../constants/theme';

export default function SectionTitle({ title, actionText, onAction, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {actionText && (
        <Pressable onPress={onAction} hitSlop={8}>
          <Text style={styles.action}>{actionText}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.base,
    marginTop: Spacing.xl,
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
  },
  action: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.medium,
    color: Colors.accentTeal,
  },
});
