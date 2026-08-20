/**
 * Question Bank Screen — Practice questions with filters.
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
import { Colors, Typography, Spacing, BorderRadius } from '../../constants/theme';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SubjectChip from '../../components/SubjectChip';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';

const SUBJECTS = ['Physics', 'Chemistry', 'Math', 'Biology'];
const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

const QUESTION_SETS = [
  { id: '1', title: 'Mechanics — Forces & Motion', count: 45, difficulty: 'Medium', subject: 'Physics', color: Colors.accentBlue },
  { id: '2', title: 'Chemical Bonding', count: 38, difficulty: 'Hard', subject: 'Chemistry', color: Colors.accentTeal },
  { id: '3', title: 'Differential Equations', count: 52, difficulty: 'Hard', subject: 'Math', color: Colors.accentIndigo },
  { id: '4', title: 'Cell Biology Basics', count: 30, difficulty: 'Easy', subject: 'Biology', color: '#34D399' },
  { id: '5', title: 'Electromagnetism', count: 40, difficulty: 'Medium', subject: 'Physics', color: Colors.accentBlue },
];

const difficultyColor = {
  Easy: Colors.success,
  Medium: Colors.warning,
  Hard: Colors.error,
};

export default function QuestionBankScreen() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  const filtered = QUESTION_SETS.filter((q) => {
    const matchSubject = !selectedSubject || q.subject === selectedSubject;
    const matchDiff = !selectedDifficulty || q.difficulty === selectedDifficulty;
    return matchSubject && matchDiff;
  });

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header
        title="Question Bank"
        subtitle="Practice makes perfect"
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
          {/* Subject Filter */}
          <Text style={styles.filterLabel}>Subject</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
            {SUBJECTS.map((s) => (
              <SubjectChip
                key={s}
                label={s}
                selected={selectedSubject === s}
                onPress={() => setSelectedSubject(selectedSubject === s ? null : s)}
              />
            ))}
          </ScrollView>

          {/* Difficulty Filter */}
          <Text style={styles.filterLabel}>Difficulty</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
            {DIFFICULTIES.map((d) => (
              <SubjectChip
                key={d}
                label={d}
                selected={selectedDifficulty === d}
                color={difficultyColor[d]}
                onPress={() => setSelectedDifficulty(selectedDifficulty === d ? null : d)}
              />
            ))}
          </ScrollView>

          {/* Results Count */}
          <View style={styles.resultsRow}>
            <Text style={styles.resultsText}>{filtered.length} question sets found</Text>
          </View>

          {/* Question Sets */}
          {filtered.map((qs) => (
            <Card key={qs.id} onPress={() => {}} style={styles.qsCard}>
              <View style={styles.qsHeader}>
                <Text style={styles.qsTitle}>{qs.title}</Text>
                <View style={[styles.diffBadge, { backgroundColor: difficultyColor[qs.difficulty] + '20' }]}>
                  <Text style={[styles.diffText, { color: difficultyColor[qs.difficulty] }]}>{qs.difficulty}</Text>
                </View>
              </View>
              <View style={styles.qsMeta}>
                <Ionicons name="help-circle-outline" size={14} color={Colors.textMuted} />
                <Text style={styles.qsCount}>{qs.count} Questions</Text>
                <Text style={styles.qsDot}>•</Text>
                <Text style={[styles.qsSubject, { color: qs.color }]}>{qs.subject}</Text>
              </View>
              <Button title="Start Practice" onPress={() => {}} size="sm" variant="ghost" style={{ alignSelf: 'flex-start', marginTop: Spacing.sm }} />
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
  filterLabel: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textSecondary,
    paddingHorizontal: Spacing.base,
    marginTop: Spacing.base,
    marginBottom: Spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  chipRow: { paddingHorizontal: Spacing.base },
  resultsRow: {
    paddingHorizontal: Spacing.base,
    paddingVertical: Spacing.md,
  },
  resultsText: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
  },
  qsCard: { marginHorizontal: Spacing.base, marginBottom: Spacing.md },
  qsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  qsTitle: {
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
    flex: 1,
    marginRight: Spacing.sm,
  },
  diffBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
  },
  diffText: { fontSize: 10, fontWeight: Typography.weight.semiBold },
  qsMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: Spacing.sm,
  },
  qsCount: { fontSize: Typography.size.xs, color: Colors.textMuted },
  qsDot: { fontSize: Typography.size.xs, color: Colors.textMuted },
  qsSubject: { fontSize: Typography.size.xs, fontWeight: Typography.weight.medium },
});
