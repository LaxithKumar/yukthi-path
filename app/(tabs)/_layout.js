/**
 * Tab Layout — Bottom tab navigator with 5 main tabs.
 */
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Shadows } from '../../constants/theme';

const TAB_ICON_MAP = {
  index: { focused: 'home', unfocused: 'home-outline' },
  learn: { focused: 'book', unfocused: 'book-outline' },
  library: { focused: 'library', unfocused: 'library-outline' },
  progress: { focused: 'stats-chart', unfocused: 'stats-chart-outline' },
  profile: { focused: 'person', unfocused: 'person-outline' },
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.tabActive,
        tabBarInactiveTintColor: Colors.tabInactive,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIconStyle: styles.tabIcon,
        tabBarIcon: ({ focused, color, size }) => {
          const icons = TAB_ICON_MAP[route.name] || TAB_ICON_MAP.index;
          const iconName = focused ? icons.focused : icons.unfocused;
          return (
            <View style={focused ? styles.activeIconWrap : null}>
              <Ionicons name={iconName} size={22} color={color} />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name="learn"
        options={{ title: 'Learn' }}
      />
      <Tabs.Screen
        name="library"
        options={{ title: 'Library' }}
      />
      <Tabs.Screen
        name="progress"
        options={{ title: 'Progress' }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile' }}
      />

      {/* Hidden from tab bar — navigated to from other screens */}
      <Tabs.Screen name="tutor" options={{ href: null }} />
      <Tabs.Screen name="lab" options={{ href: null }} />
      <Tabs.Screen name="question-bank" options={{ href: null }} />
      <Tabs.Screen name="paper-generator" options={{ href: null }} />
      <Tabs.Screen name="recharge" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.bgPrimary,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    height: Platform.OS === 'ios' ? 88 : 68,
    paddingBottom: Platform.OS === 'ios' ? 28 : 8,
    paddingTop: 8,
    ...Shadows.sm,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: Typography.weight.medium,
    marginTop: 2,
  },
  tabIcon: {
    marginBottom: -2,
  },
  activeIconWrap: {
    backgroundColor: Colors.accentTeal + '15',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});
