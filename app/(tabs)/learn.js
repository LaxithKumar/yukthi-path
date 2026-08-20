/**
 * Learn Screen — Course catalog with search and subject filters.
 */
import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../constants/theme';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import SubjectChip from '../../components/SubjectChip';
import Card from '../../components/Card';
import ProgressBar from '../../components/ProgressBar';

const SUBJECTS = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science'];

const COURSES = [
  { id: '1', title: 'Quantum Physics', subtitle: '24 Chapters • 148 Lessons', progress: 0.4, icon: 'planet-outline', color: Colors.accentBlue, subject: 'Physics' },
  { id: '2', title: 'Organic Chemistry', subtitle: '18 Chapters • 95 Lessons', progress: 0.65, icon: 'flask-outline', color: Colors.accentTeal, subject: 'Chemistry' },
  { id: '3', title: 'Calculus II', subtitle: '12 Chapters • 72 Lessons', progress: 0.85, icon: 'calculator-outline', color: Colors.accentIndigo, subject: 'Mathematics' },
  { id: '4', title: 'Molecular Biology', subtitle: '20 Chapters • 110 Lessons', progress: 0.2, icon: 'leaf-outline', color: '#34D399', subject: 'Biology' },
  { id: '5', title: 'Data Structures', subtitle: '15 Chapters • 88 Lessons', progress: 0.55, icon: 'code-slash-outline', color: Colors.accentCyan, subject: 'Computer Science' },
  { id: '6', title: 'Thermodynamics', subtitle: '10 Chapters • 60 Lessons', progress: 0.3, icon: 'thermometer-outline', color: '#F59E0B', subject: 'Physics' },
];

export default function LearnScreen() {
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, []);

  const filteredCourses = COURSES.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = selectedSubject === 'All' || c.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const renderCourse = ({ item, index }) => (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [20 + index * 10, 0] }) }],
      }}
    >
      <Card onPress={() => {}} style={styles.courseCard}>
        <View style={styles.courseRow}>
          <View style={[styles.courseIcon, { backgroundColor: item.color + '20' }]}>
            <Ionicons name={item.icon} size={24} color={item.color} />
          </View>
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseSubtitle}>{item.subtitle}</Text>
            <View style={styles.progressRow}>
              <ProgressBar progress={item.progress} color={item.color} height={6} style={{ flex: 1 }} />
              <Text style={[styles.progressText, { color: item.color }]}>
                {Math.round(item.progress * 100)}%
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header title="Learn" subtitle="Explore courses and subjects" />

      <SearchBar
        placeholder="Search courses..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchBar}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipRow}
      >
        {SUBJECTS.map((s) => (
          <SubjectChip
            key={s}
            label={s}
            selected={selectedSubject === s}
            onPress={() => setSelectedSubject(s)}
          />
        ))}
      </ScrollView>

      <FlatList
        data={filteredCourses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="search-outline" size={48} color={Colors.textMuted} />
            <Text style={styles.emptyText}>No courses found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  searchBar: {
    marginTop: Spacing.sm,
  },
  chipRow: {
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.base,
    paddingBottom: Spacing.sm,
  },
  list: {
    paddingHorizontal: Spacing.base,
    paddingBottom: Spacing['3xl'],
    gap: Spacing.md,
  },
  courseCard: {
    padding: Spacing.base,
  },
  courseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  courseIcon: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
  },
  courseSubtitle: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  progressText: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semiBold,
    width: 35,
    textAlign: 'right',
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing['5xl'],
  },
  emptyText: {
    fontSize: Typography.size.base,
    color: Colors.textMuted,
    marginTop: Spacing.md,
  },
});
