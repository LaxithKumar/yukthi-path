/**
 * Card — Reusable rounded card with shadow and optional press animation.
 */
import React, { useRef } from 'react';
import { StyleSheet, Animated, Pressable, View } from 'react-native';
import { Colors, BorderRadius, Spacing, Shadows } from '../constants/theme';

export default function Card({
  children,
  style,
  onPress,
  variant = 'default', // 'default' | 'elevated' | 'outlined'
  animated = true,
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    if (!animated || !onPress) return;
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      friction: 8,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    if (!animated || !onPress) return;
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const variantStyle =
    variant === 'elevated'
      ? styles.elevated
      : variant === 'outlined'
      ? styles.outlined
      : styles.default;

  if (onPress) {
    return (
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[styles.card, variantStyle, style]}
        >
          {children}
        </Pressable>
      </Animated.View>
    );
  }

  return <View style={[styles.card, variantStyle, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.base,
    overflow: 'hidden',
  },
  default: {
    backgroundColor: Colors.bgSecondary,
    ...Shadows.md,
  },
  elevated: {
    backgroundColor: Colors.bgTertiary,
    ...Shadows.lg,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
