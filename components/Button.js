/**
 * Button — Primary/Secondary/Ghost variants with press animation.
 */
import React, { useRef } from 'react';
import { StyleSheet, Animated, Pressable, Text, ActivityIndicator } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '../constants/theme';

export default function Button({
  title,
  onPress,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  size = 'md',          // 'sm' | 'md' | 'lg'
  icon,
  loading = false,
  disabled = false,
  style,
  textStyle,
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

  const sizeStyle = sizes[size] || sizes.md;
  const variantStyle = variants[variant] || variants.primary;
  const variantTextStyle = variantText[variant] || variantText.primary;

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled || loading}
        style={[
          styles.button,
          sizeStyle,
          variantStyle,
          disabled && styles.disabled,
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={variant === 'primary' ? Colors.white : Colors.accentTeal}
          />
        ) : (
          <>
            {icon && icon}
            <Text
              style={[
                styles.text,
                variantTextStyle,
                sizeText[size] || sizeText.md,
                icon && { marginLeft: Spacing.sm },
                textStyle,
              ]}
            >
              {title}
            </Text>
          </>
        )}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.md,
  },
  text: {
    fontWeight: Typography.weight.semiBold,
  },
  disabled: {
    opacity: 0.5,
  },
});

const sizes = {
  sm: { paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm, borderRadius: BorderRadius.sm },
  md: { paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md, borderRadius: BorderRadius.md },
  lg: { paddingHorizontal: Spacing.xl, paddingVertical: Spacing.base, borderRadius: BorderRadius.lg },
};

const sizeText = {
  sm: { fontSize: Typography.size.sm },
  md: { fontSize: Typography.size.base },
  lg: { fontSize: Typography.size.lg },
};

const variants = {
  primary: { backgroundColor: Colors.accentTeal },
  secondary: { backgroundColor: Colors.bgTertiary, borderWidth: 1, borderColor: Colors.border },
  ghost: { backgroundColor: 'transparent' },
};

const variantText = {
  primary: { color: Colors.textInverse },
  secondary: { color: Colors.textPrimary },
  ghost: { color: Colors.accentTeal },
};
