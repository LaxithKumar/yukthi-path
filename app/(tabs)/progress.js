/**
 * Progress Screen — Stats overview, subject breakdown, and activity feed.
 */
import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../constants/theme';
import Header from '../../components/Header';
import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';
import StatCard from '../../components/StatCard';

const { width } = Dimensions.get('window');

const SUBJECTS_PROGRESS = [
  { name: 'Physics', progress: 0.72, color: Colors.accentBlue, chapters: '18/25' },
  { name: 'Chemistry', progress: 0.58, color: Colors.accentTeal, chapters: '12/21' },
  { name: 'Mathematics', progress: 0.85, color: Colors.accentIndigo, chapters: '22/26' },
  { name: 'Biology', progress: 0.35, color: '#34D399', chapters: '7/20' },
  { name: 'Computer Science', progress: 0.63, color: Colors.accentCyan, chapters: '10/16' },
];

const RECENT_ACTIVITY = [
  { id: '1', action: 'Completed Chapter 5', subject: 'Organic Chemistry', time: '2h ago', icon: 'checkmark-circle', color: Colors.success },
  { id: '2', action: 'Scored 92% in Quiz', subject: 'Quantum Physics', time: '5h ago', icon: 'trophy', color: Colors.warning },
  { id: '3', action: 'Started Chapter 8', subject: 'Calculus II', time: '1d ago', icon: 'play-circle', color: Colors.accentBlue },
  { id: '4', action: 'Reviewed 30 Questions', subject: 'Biology', time: '1d ago', icon: 'help-circle', color: Colors.accentIndigo },
];

export default function ProgressScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header title="Progress" subtitle="Track your learning journey" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Overview Stats */}
          <View style={styles.statsRow}>
            <StatCard
              icon={<Ionicons name="time-outline" size={20} color={Colors.accentBlue} />}
              label="Study Hours"
              value="128"
              accentColor={Colors.accentBlue}
              style={styles.statCard}
            />
            <StatCard
              icon={<Ionicons name="checkmark-done-outline" size={20} color={Colors.success} />}
              label="Completed"
              value="69"
              accentColor={Colors.success}
              style={styles.statCard}
            />
            <StatCard
              icon={<Ionicons name="trending-up-outline" size={20} color={Colors.accentTeal} />}
              label="Avg Score"
              value="87%"
              accentColor={Colors.accentTeal}
              style={styles.statCard}
            />
          </View>

          {/* Overall Progress Ring */}
          <Card style={styles.overallCard}>
            <View style={styles.overallRow}>
              <View style={styles.ringContainer}>
                <View style={styles.ringOuter}>
                  <View style={styles.ringInner}>
                    <Text style={styles.ringPercent}>64%</Text>
                    <Text style={styles.ringLabel}>Overall</Text>
                  </View>
                </View>
              </View>
              <View style={styles.overallInfo}>
                <Text style={styles.overallTitle}>Keep it up!</Text>
                <Text style={styles.overallSubtitle}>
                  You've completed 64% of your curriculum. Stay consistent to reach your goals.
                </Text>
              </View>
            </View>
          </Card>

          {/* Subject Breakdown */}
          <Text style={styles.sectionTitle}>Subject Breakdown</Text>
          <Card style={styles.breakdownCard}>
            {SUBJECTS_PROGRESS.map((subj, index) => (
              <View key={subj.name} style={[styles.subjectRow, index > 0 && styles.subjectBorder]}>
                <View style={styles.subjectHeader}>
                  <Text style={styles.subjectName}>{subj.name}</Text>
                  <Text style={[styles.subjectChapters, { color: subj.color }]}>{subj.chapters}</Text>
                </View>
                <ProgressBar progress={subj.progress} color={subj.color} height={6} />
              </View>
            ))}
          </Card>

          {/* Recent Activity */}
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {RECENT_ACTIVITY.map((act) => (
            <Card key={act.id} style={styles.activityCard}>
              <View style={styles.activityRow}>
                <View style={[styles.activityIcon, { backgroundColor: act.color + '20' }]}>
                  <Ionicons name={act.icon} size={20} color={act.color} />
                </View>
                <View style={styles.activityInfo}>
                  <Text style={styles.activityAction}>{act.action}</Text>
                  <Text style={styles.activitySubject}>{act.subject}</Text>
                </View>
                <Text style={styles.activityTime}>{act.time}</Text>
              </View>
            </Card>
          ))}

          <View style={{ height: Spacing['2xl'] }} />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  scrollContent: { paddingBottom: 20 },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.base,
    gap: Spacing.md,
    marginTop: Spacing.sm,
  },
  statCard: { flex: 1 },
  overallCard: {
    marginHorizontal: Spacing.base,
    marginTop: Spacing.xl,
  },
  overallRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.base,
  },
  ringContainer: { alignItems: 'center' },
  ringOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: Colors.accentTeal,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accentTeal + '10',
  },
  ringInner: {
    alignItems: 'center',
  },
  ringPercent: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
  },
  ringLabel: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
  },
  overallInfo: { flex: 1 },
  overallTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
  },
  overallSubtitle: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    marginTop: 4,
    lineHeight: Typography.size.sm * 1.5,
  },
  sectionTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
    paddingHorizontal: Spacing.base,
    marginTop: Spacing.xl,
    marginBottom: Spacing.md,
  },
  breakdownCard: {
    marginHorizontal: Spacing.base,
  },
  subjectRow: {
    paddingVertical: Spacing.md,
  },
  subjectBorder: {
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
  subjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm,
  },
  subjectName: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.medium,
    color: Colors.textPrimary,
  },
  subjectChapters: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semiBold,
  },
  activityCard: {
    marginHorizontal: Spacing.base,
    marginBottom: Spacing.sm,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityInfo: { flex: 1 },
  activityAction: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.medium,
    color: Colors.textPrimary,
  },
  activitySubject: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },
  activityTime: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
  },
});
