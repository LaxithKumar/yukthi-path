/**
 * Tutor Screen — AI tutor interface with topic selection and session cards.
 */
import React, { useRef, useEffect } from 'react';
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
import SubjectChip from '../../components/SubjectChip';

const TOPICS = ['Physics', 'Chemistry', 'Math', 'Biology', 'CS'];

const SESSIONS = [
  { id: '1', title: 'Newton\'s Laws Explained', topic: 'Physics', duration: '15 min', icon: 'planet-outline', color: Colors.accentBlue },
  { id: '2', title: 'Balancing Equations', topic: 'Chemistry', duration: '12 min', icon: 'flask-outline', color: Colors.accentTeal },
  { id: '3', title: 'Derivatives Practice', topic: 'Math', duration: '20 min', icon: 'calculator-outline', color: Colors.accentIndigo },
];

export default function TutorScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header
        title="AI Tutor"
        subtitle="Your personal learning assistant"
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
          {/* Welcome Card */}
          <Card style={styles.welcomeCard}>
            <View style={styles.welcomeRow}>
              <View style={styles.welcomeIcon}>
                <Ionicons name="chatbubbles" size={32} color={Colors.accentBlue} />
              </View>
              <View style={styles.welcomeText}>
                <Text style={styles.welcomeTitle}>Ask Anything</Text>
                <Text style={styles.welcomeSubtitle}>
                  Get detailed explanations, step-by-step solutions, and concept clarifications.
                </Text>
              </View>
            </View>
            <Button
              title="Start New Session"
              onPress={() => {}}
              size="lg"
              style={{ marginTop: Spacing.base }}
            />
          </Card>

          {/* Topic Selector */}
          <Text style={styles.sectionTitle}>Choose a Topic</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
            {TOPICS.map((t) => (
              <SubjectChip key={t} label={t} onPress={() => {}} />
            ))}
          </ScrollView>

          {/* Recent Sessions */}
          <Text style={styles.sectionTitle}>Recent Sessions</Text>
          {SESSIONS.map((session) => (
            <Card key={session.id} onPress={() => {}} style={styles.sessionCard}>
              <View style={styles.sessionRow}>
                <View style={[styles.sessionIcon, { backgroundColor: session.color + '20' }]}>
                  <Ionicons name={session.icon} size={22} color={session.color} />
                </View>
                <View style={styles.sessionInfo}>
                  <Text style={styles.sessionTitle}>{session.title}</Text>
                  <View style={styles.sessionMeta}>
                    <Text style={styles.sessionTopic}>{session.topic}</Text>
                    <Text style={styles.sessionDot}>•</Text>
                    <Text style={styles.sessionDuration}>{session.duration}</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
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
  welcomeCard: {
    marginHorizontal: Spacing.base,
    marginTop: Spacing.sm,
    backgroundColor: Colors.accentBlue + '10',
    borderWidth: 1,
    borderColor: Colors.accentBlue + '30',
  },
  welcomeRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  welcomeIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.accentBlue + '20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: { flex: 1 },
  welcomeTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
  },
  welcomeSubtitle: {
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
  chipRow: {
    paddingHorizontal: Spacing.base,
  },
  sessionCard: {
    marginHorizontal: Spacing.base,
    marginBottom: Spacing.sm,
  },
  sessionRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  sessionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sessionInfo: { flex: 1 },
  sessionTitle: {
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.medium,
    color: Colors.textPrimary,
  },
  sessionMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 2, gap: 6 },
  sessionTopic: { fontSize: Typography.size.xs, color: Colors.textMuted },
  sessionDot: { fontSize: Typography.size.xs, color: Colors.textMuted },
  sessionDuration: { fontSize: Typography.size.xs, color: Colors.textMuted },
});
