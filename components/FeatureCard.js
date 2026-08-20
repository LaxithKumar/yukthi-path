/**
 * FeatureCard — Feature highlight card with icon, title, description, and gradient accent.
 */
import React, { useRef } from 'react';
import { StyleSheet, View, Text, Animated, Pressable } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../constants/theme';

export default function FeatureCard({
  icon,
  title,
  description,
  accentColor = Colors.accentTeal,
  onPress,
  style,
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      friction: 8,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, style]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.card}
      >
        {/* Accent bar */}
        <View style={[styles.accentBar, { backgroundColor: accentColor }]} />

        <View style={styles.content}>
          <View style={[styles.iconWrap, { backgroundColor: accentColor + '20' }]}>
            {icon}
          </View>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          {description && (
            <Text style={styles.description} numberOfLines={2}>{description}</Text>
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.bgSecondary,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    ...Shadows.md,
  },
  accentBar: {
    height: 3,
    width: '100%',
  },
  content: {
    padding: Spacing.base,
    alignItems: 'center',
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  description: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: 4,
    lineHeight: Typography.size.xs * 1.4,
  },
});
