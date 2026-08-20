/**
 * Paper Generator Screen — Test paper configuration and generation.
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
import SubjectChip from '../../components/SubjectChip';
import IconButton from '../../components/IconButton';

const SUBJECTS = ['Physics', 'Chemistry', 'Math', 'Biology', 'CS'];

const CHAPTERS_MAP = {
  Physics: ['Mechanics', 'Optics', 'Thermodynamics', 'Electromagnetism'],
  Chemistry: ['Organic', 'Inorganic', 'Physical Chemistry'],
  Math: ['Calculus', 'Algebra', 'Probability', 'Geometry'],
  Biology: ['Cell Biology', 'Genetics', 'Ecology'],
  CS: ['Data Structures', 'Algorithms', 'OS'],
};

const RECENT_PAPERS = [
  { id: '1', title: 'Physics Mid-Term', questions: 30, time: '2h', date: 'Aug 15', color: Colors.accentBlue },
  { id: '2', title: 'Chemistry Practice', questions: 25, time: '1.5h', date: 'Aug 12', color: Colors.accentTeal },
];

export default function PaperGeneratorScreen() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState('Physics');
  const [selectedChapters, setSelectedChapters] = useState([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  const chapters = CHAPTERS_MAP[selectedSubject] || [];

  const toggleChapter = (ch) => {
    setSelectedChapters((prev) =>
      prev.includes(ch) ? prev.filter((c) => c !== ch) : [...prev, ch]
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header
        title="Paper Generator"
        subtitle="Create custom test papers"
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
          {/* Configuration Card */}
          <Card style={styles.configCard}>
            <View style={styles.configHeader}>
              <Ionicons name="document-text-outline" size={22} color={Colors.accentTeal} />
              <Text style={styles.configTitle}>Configure Paper</Text>
            </View>

            {/* Subject Selection */}
            <Text style={styles.label}>Select Subject</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
              {SUBJECTS.map((s) => (
                <SubjectChip
                  key={s}
                  label={s}
                  selected={selectedSubject === s}
                  onPress={() => {
                    setSelectedSubject(s);
                    setSelectedChapters([]);
                  }}
                />
              ))}
            </ScrollView>

            {/* Chapter Selection */}
            <Text style={styles.label}>Select Chapters</Text>
            <View style={styles.chapterWrap}>
              {chapters.map((ch) => (
                <SubjectChip
                  key={ch}
                  label={ch}
                  selected={selectedChapters.includes(ch)}
                  color={Colors.accentIndigo}
                  onPress={() => toggleChapter(ch)}
                />
              ))}
            </View>

            {/* Summary */}
            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryValue}>{selectedChapters.length}</Text>
                <Text style={styles.summaryLabel}>Chapters</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryValue}>{selectedChapters.length * 10}</Text>
                <Text style={styles.summaryLabel}>Questions</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryValue}>{selectedChapters.length * 20}m</Text>
                <Text style={styles.summaryLabel}>Duration</Text>
              </View>
            </View>

            <Button
              title="Generate Paper"
              onPress={() => {}}
              size="lg"
              disabled={selectedChapters.length === 0}
              icon={<Ionicons name="sparkles" size={18} color={selectedChapters.length === 0 ? Colors.textMuted : Colors.textInverse} />}
              style={{ marginTop: Spacing.lg }}
            />
          </Card>

          {/* Recent Papers */}
          <Text style={styles.sectionTitle}>Recent Papers</Text>
          {RECENT_PAPERS.map((paper) => (
            <Card key={paper.id} onPress={() => {}} style={styles.paperCard}>
              <View style={styles.paperRow}>
                <View style={[styles.paperIcon, { backgroundColor: paper.color + '20' }]}>
                  <Ionicons name="document-text" size={22} color={paper.color} />
                </View>
                <View style={styles.paperInfo}>
                  <Text style={styles.paperTitle}>{paper.title}</Text>
                  <Text style={styles.paperMeta}>
                    {paper.questions} Qs • {paper.time} • {paper.date}
                  </Text>
                </View>
                <Ionicons name="download-outline" size={20} color={Colors.textMuted} />
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
  configCard: {
    marginHorizontal: Spacing.base,
    marginTop: Spacing.sm,
  },
  configHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.base,
  },
  configTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
  },
  label: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textSecondary,
    marginTop: Spacing.base,
    marginBottom: Spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  chipRow: { gap: 0 },
  chapterWrap: { flexDirection: 'row', flexWrap: 'wrap' },
  summaryRow: {
    flexDirection: 'row',
    marginTop: Spacing.lg,
    backgroundColor: Colors.bgTertiary,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
  },
  summaryItem: { flex: 1, alignItems: 'center' },
  summaryValue: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
  },
  summaryLabel: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
    paddingHorizontal: Spacing.base,
    marginTop: Spacing.xl,
    marginBottom: Spacing.md,
  },
  paperCard: { marginHorizontal: Spacing.base, marginBottom: Spacing.sm },
  paperRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  paperIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperInfo: { flex: 1 },
  paperTitle: {
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.medium,
    color: Colors.textPrimary,
  },
  paperMeta: { fontSize: Typography.size.xs, color: Colors.textMuted, marginTop: 2 },
});
