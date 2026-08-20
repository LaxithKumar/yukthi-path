/**
 * SubjectChip — Tag/chip for subjects and categories.
 */
import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '../constants/theme';

export default function SubjectChip({ label, selected = false, onPress, color = Colors.accentTeal, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        selected
          ? { backgroundColor: color + '30', borderColor: color }
          : { backgroundColor: Colors.bgTertiary, borderColor: Colors.border },
        style,
      ]}
    >
      <Text
        style={[
          styles.label,
          { color: selected ? color : Colors.textSecondary },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    marginRight: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  label: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.medium,
  },
});
