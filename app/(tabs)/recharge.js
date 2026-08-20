/**
 * Recharge Screen — Break activities and relaxation content.
 */
import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../constants/theme';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';

const ACTIVITIES = [
  { id: '1', title: 'Quick Meditation', desc: 'Calm your mind with a 5-min session', icon: 'flower-outline', color: Colors.accentTeal, duration: '5 min' },
  { id: '2', title: 'Stretch Break', desc: 'Quick desk stretches for your body', icon: 'body-outline', color: Colors.accentBlue, duration: '3 min' },
  { id: '3', title: 'Eye Relaxation', desc: 'Rest your eyes with the 20-20-20 rule', icon: 'eye-outline', color: Colors.accentIndigo, duration: '2 min' },
  { id: '4', title: 'Brain Teaser', desc: 'Fun puzzles to shift your focus', icon: 'bulb-outline', color: '#F59E0B', duration: '5 min' },
  { id: '5', title: 'Breathing Exercise', desc: 'Box breathing for stress relief', icon: 'cloud-outline', color: '#FB7185', duration: '4 min' },
];

const FUN_FACTS = [
  '🧠 The human brain uses 20% of your total energy.',
  '🌍 Light takes 8 min 20 sec to travel from the Sun to Earth.',
  '🧬 Your DNA is about 6 feet long, coiled inside each cell.',
  '⚡ A lightning bolt is 5× hotter than the surface of the Sun.',
  '🎵 Listening to music can improve your mood in under 15 minutes.',
];

export default function RechargeScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % FUN_FACTS.length);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header
        title="Recharge"
        subtitle="Take a healthy break"
        rightAction={
          <IconButton
            icon={<Ionicons name="arrow-back" size={20} color={Colors.textPrimary} />}
            onPress={() => router.back()}
            size={38}
          />
        }
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Timer Suggestion */}
          <Card style={styles.timerCard}>
            <View style={styles.timerContent}>
              <View style={styles.timerRing}>
                <Ionicons name="timer-outline" size={36} color={Colors.accentTeal} />
              </View>
              <View style={styles.timerText}>
                <Text style={styles.timerTitle}>Time for a Break!</Text>
                <Text style={styles.timerSubtitle}>
                  You've been studying for 45 minutes. A short break can boost your focus.
                </Text>
              </View>
            </View>
            <Button
              title="Start 10-min Break"
              onPress={() => {}}
              size="lg"
              style={{ marginTop: Spacing.base }}
            />
          </Card>

          {/* Fun Fact */}
          <Card onPress={nextFact} style={styles.factCard}>
            <View style={styles.factHeader}>
              <Ionicons name="sparkles" size={18} color={Colors.warning} />
              <Text style={styles.factLabel}>Fun Fact</Text>
              <Text style={styles.factTap}>Tap for next →</Text>
            </View>
            <Text style={styles.factText}>{FUN_FACTS[currentFact]}</Text>
          </Card>

          {/* Activities */}
          <Text style={styles.sectionTitle}>Relaxation Activities</Text>
          {ACTIVITIES.map((act) => (
            <Card key={act.id} onPress={() => {}} style={styles.actCard}>
              <View style={styles.actRow}>
                <View style={[styles.actIcon, { backgroundColor: act.color + '20' }]}>
                  <Ionicons name={act.icon} size={24} color={act.color} />
                </View>
                <View style={styles.actInfo}>
                  <Text style={styles.actTitle}>{act.title}</Text>
                  <Text style={styles.actDesc}>{act.desc}</Text>
                </View>
                <View style={styles.actDuration}>
                  <Text style={styles.actDurationText}>{act.duration}</Text>
                </View>
              </View>
            </Card>
          ))}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  scroll: { paddingBottom: Spacing['3xl'] },
  timerCard: {
    marginHorizontal: Spacing.base,
    marginTop: Spacing.sm,
    backgroundColor: Colors.accentTeal + '08',
    borderWidth: 1,
    borderColor: Colors.accentTeal + '25',
  },
  timerContent: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  timerRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.accentTeal + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: { flex: 1 },
  timerTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
  },
  timerSubtitle: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    marginTop: 4,
    lineHeight: Typography.size.sm * 1.5,
  },
  factCard: {
    marginHorizontal: Spacing.base,
    marginTop: Spacing.base,
    backgroundColor: Colors.warning + '08',
    borderWidth: 1,
    borderColor: Colors.warning + '20',
  },
  factHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: Spacing.sm,
  },
  factLabel: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semiBold,
    color: Colors.warning,
    flex: 1,
  },
  factTap: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
  },
  factText: {
    fontSize: Typography.size.base,
    color: Colors.textPrimary,
    lineHeight: Typography.size.base * 1.6,
  },
  sectionTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
    paddingHorizontal: Spacing.base,
    marginTop: Spacing.xl,
    marginBottom: Spacing.md,
  },
  actCard: { marginHorizontal: Spacing.base, marginBottom: Spacing.sm },
  actRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  actIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actInfo: { flex: 1 },
  actTitle: {
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.medium,
    color: Colors.textPrimary,
  },
  actDesc: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },
  actDuration: {
    backgroundColor: Colors.bgTertiary,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  actDurationText: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.medium,
    color: Colors.textSecondary,
  },
});
