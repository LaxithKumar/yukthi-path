/**
 * Dashboard / Home Screen
 * 
 * The main landing screen with greeting, stats, continue learning,
 * and feature grid navigation.
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
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../constants/theme';
import Card from '../../components/Card';
import StatCard from '../../components/StatCard';
import SectionTitle from '../../components/SectionTitle';
import FeatureCard from '../../components/FeatureCard';
import ProgressBar from '../../components/ProgressBar';
import IconButton from '../../components/IconButton';

const { width } = Dimensions.get('window');

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

// Mock continue-learning data
const CONTINUE_LEARNING = [
  { id: '1', title: 'Organic Chemistry', chapter: 'Chapter 5 — Alkenes', progress: 0.65, color: Colors.accentTeal },
  { id: '2', title: 'Quantum Physics', chapter: 'Chapter 3 — Wave Functions', progress: 0.4, color: Colors.accentBlue },
  { id: '3', title: 'Calculus', chapter: 'Chapter 8 — Integrals', progress: 0.85, color: Colors.accentIndigo },
];

const FEATURES = [
  { key: 'tutor', title: 'AI Tutor', icon: 'chatbubbles-outline', color: Colors.accentBlue, desc: 'Ask anything' },
  { key: 'lab', title: 'Virtual Lab', icon: 'flask-outline', color: Colors.accentTeal, desc: 'Experiments' },
  { key: 'question-bank', title: 'Questions', icon: 'help-circle-outline', color: Colors.accentIndigo, desc: 'Practice' },
  { key: 'paper-generator', title: 'Papers', icon: 'document-text-outline', color: '#F59E0B', desc: 'Generate tests' },
  { key: 'recharge', title: 'Recharge', icon: 'battery-charging-outline', color: '#FB7185', desc: 'Take a break' },
  { key: 'learn', title: 'Explore', icon: 'compass-outline', color: Colors.accentCyan, desc: 'Discover more' },
];

export default function DashboardScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          {/* Greeting Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>{getGreeting()} 👋</Text>
              <Text style={styles.subtitle}>Ready to learn something new?</Text>
            </View>
            <IconButton
              icon={<Ionicons name="notifications-outline" size={20} color={Colors.textPrimary} />}
              onPress={() => {}}
            />
          </View>

          {/* Quick Stats */}
          <View style={styles.statsRow}>
            <StatCard
              icon={<Ionicons name="flame" size={20} color={Colors.warning} />}
              label="Day Streak"
              value="12"
              accentColor={Colors.warning}
              style={styles.statCard}
            />
            <StatCard
              icon={<Ionicons name="star" size={20} color={Colors.accentTeal} />}
              label="Total XP"
              value="2,450"
              accentColor={Colors.accentTeal}
              style={styles.statCard}
            />
            <StatCard
              icon={<Ionicons name="book" size={20} color={Colors.accentBlue} />}
              label="Courses"
              value="6"
              accentColor={Colors.accentBlue}
              style={styles.statCard}
            />
          </View>

          {/* Continue Learning */}
          <SectionTitle title="Continue Learning" actionText="See All" onAction={() => router.push('/learn')} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          >
            {CONTINUE_LEARNING.map((item) => (
              <Card key={item.id} onPress={() => router.push('/learn')} style={styles.courseCard}>
                <View style={[styles.courseAccent, { backgroundColor: item.color }]} />
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseChapter}>{item.chapter}</Text>
                <View style={styles.courseProgress}>
                  <ProgressBar progress={item.progress} color={item.color} height={6} />
                  <Text style={styles.coursePercent}>{Math.round(item.progress * 100)}%</Text>
                </View>
              </Card>
            ))}
          </ScrollView>

          {/* Explore Features */}
          <SectionTitle title="Explore Features" />
          <View style={styles.featureGrid}>
            {FEATURES.map((f) => (
              <FeatureCard
                key={f.key}
                icon={<Ionicons name={f.icon} size={24} color={f.color} />}
                title={f.title}
                description={f.desc}
                accentColor={f.color}
                onPress={() => router.push(`/${f.key}`)}
                style={styles.featureItem}
              />
            ))}
          </View>

          {/* Motivational Card */}
          <Card style={styles.motivationCard}>
            <View style={styles.motivationContent}>
              <Ionicons name="rocket-outline" size={28} color={Colors.accentTeal} />
              <View style={styles.motivationText}>
                <Text style={styles.motivationTitle}>Keep Going!</Text>
                <Text style={styles.motivationSubtitle}>
                  You're 3 chapters away from completing Organic Chemistry
                </Text>
              </View>
            </View>
          </Card>

          <View style={{ height: Spacing['2xl'] }} />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.base,
    paddingBottom: Spacing.sm,
  },
  greeting: {
    fontSize: Typography.size['2xl'],
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.base,
    gap: Spacing.md,
    marginTop: Spacing.base,
  },
  statCard: {
    flex: 1,
  },
  horizontalList: {
    paddingHorizontal: Spacing.base,
    gap: Spacing.md,
  },
  courseCard: {
    width: width * 0.65,
    padding: Spacing.base,
  },
  courseAccent: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginBottom: Spacing.md,
  },
  courseTitle: {
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
  },
  courseChapter: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    marginTop: 4,
    marginBottom: Spacing.md,
  },
  courseProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  coursePercent: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textMuted,
    width: 35,
    textAlign: 'right',
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Spacing.base,
    gap: Spacing.md,
  },
  featureItem: {
    width: (width - Spacing.base * 2 - Spacing.md * 2) / 3,
  },
  motivationCard: {
    marginHorizontal: Spacing.base,
    marginTop: Spacing.xl,
    backgroundColor: Colors.accentTeal + '10',
    borderWidth: 1,
    borderColor: Colors.accentTeal + '30',
  },
  motivationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  motivationText: {
    flex: 1,
  },
  motivationTitle: {
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.semiBold,
    color: Colors.accentTeal,
  },
  motivationSubtitle: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    marginTop: 2,
    lineHeight: Typography.size.sm * 1.5,
  },
});
