/**
 * Profile Screen — User profile, settings, and app info.
 */
import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../constants/theme';
import Card from '../../components/Card';

const MENU_ITEMS = [
  { id: '1', title: 'Edit Profile', icon: 'person-outline', color: Colors.accentBlue },
  { id: '2', title: 'Notifications', icon: 'notifications-outline', color: Colors.accentTeal },
  { id: '3', title: 'Appearance', icon: 'color-palette-outline', color: Colors.accentIndigo },
  { id: '4', title: 'Language', icon: 'language-outline', color: Colors.accentCyan },
  { id: '5', title: 'Download Settings', icon: 'download-outline', color: '#F59E0B' },
  { id: '6', title: 'Help & Support', icon: 'help-circle-outline', color: '#34D399' },
  { id: '7', title: 'Privacy Policy', icon: 'shield-checkmark-outline', color: Colors.textSecondary },
  { id: '8', title: 'About', icon: 'information-circle-outline', color: Colors.textSecondary },
];

export default function ProfileScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 8, tension: 40, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
          {/* Avatar & Info */}
          <View style={styles.avatarSection}>
            <View style={styles.avatarRing}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={44} color={Colors.accentTeal} />
              </View>
            </View>
            <Text style={styles.name}>Student</Text>
            <Text style={styles.email}>student@yukthipath.com</Text>

            {/* Quick Stats */}
            <View style={styles.profileStats}>
              <View style={styles.profileStat}>
                <Text style={styles.profileStatValue}>12</Text>
                <Text style={styles.profileStatLabel}>Streak</Text>
              </View>
              <View style={styles.profileStatDivider} />
              <View style={styles.profileStat}>
                <Text style={styles.profileStatValue}>2,450</Text>
                <Text style={styles.profileStatLabel}>XP</Text>
              </View>
              <View style={styles.profileStatDivider} />
              <View style={styles.profileStat}>
                <Text style={styles.profileStatValue}>Level 8</Text>
                <Text style={styles.profileStatLabel}>Rank</Text>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* Menu Items */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <Card style={styles.menuCard}>
            {MENU_ITEMS.map((item, index) => (
              <Pressable
                key={item.id}
                style={[styles.menuItem, index > 0 && styles.menuBorder]}
                onPress={() => {}}
              >
                <View style={[styles.menuIcon, { backgroundColor: item.color + '15' }]}>
                  <Ionicons name={item.icon} size={20} color={item.color} />
                </View>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
              </Pressable>
            ))}
          </Card>

          {/* App Info */}
          <View style={styles.appInfo}>
            <Text style={styles.appName}>Yukthi Path</Text>
            <Text style={styles.appVersion}>Version 1.0.0</Text>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  scroll: { paddingBottom: Spacing['3xl'] },
  avatarSection: {
    alignItems: 'center',
    paddingTop: Spacing['2xl'],
    paddingBottom: Spacing.xl,
  },
  avatarRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.accentTeal,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accentTeal + '10',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: Colors.bgSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: Typography.size['2xl'],
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
    marginTop: Spacing.base,
  },
  email: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
    marginTop: 4,
  },
  profileStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xl,
    backgroundColor: Colors.bgSecondary,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.base,
    paddingHorizontal: Spacing.xl,
    ...Shadows.sm,
  },
  profileStat: {
    flex: 1,
    alignItems: 'center',
  },
  profileStatValue: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
  },
  profileStatLabel: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },
  profileStatDivider: {
    width: 1,
    height: 32,
    backgroundColor: Colors.divider,
  },
  menuCard: {
    marginHorizontal: Spacing.base,
    padding: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.base,
    gap: Spacing.md,
  },
  menuBorder: {
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    flex: 1,
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.medium,
    color: Colors.textPrimary,
  },
  appInfo: {
    alignItems: 'center',
    marginTop: Spacing['2xl'],
  },
  appName: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textMuted,
  },
  appVersion: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },
});
