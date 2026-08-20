/**
 * Lab Screen — Virtual lab with experiment cards.
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
import SubjectChip from '../../components/SubjectChip';
import IconButton from '../../components/IconButton';

const EXPERIMENTS = [
  { id: '1', title: 'Acid-Base Titration', subject: 'Chemistry', difficulty: 'Intermediate', icon: 'flask-outline', color: Colors.accentTeal, desc: 'Determine the concentration of an unknown acid.' },
  { id: '2', title: 'Simple Pendulum', subject: 'Physics', difficulty: 'Beginner', icon: 'planet-outline', color: Colors.accentBlue, desc: 'Measure the acceleration due to gravity.' },
  { id: '3', title: 'Ohm\'s Law Verification', subject: 'Physics', difficulty: 'Beginner', icon: 'flash-outline', color: '#F59E0B', desc: 'Verify the relationship between V, I, and R.' },
  { id: '4', title: 'Photosynthesis Rate', subject: 'Biology', difficulty: 'Advanced', icon: 'leaf-outline', color: '#34D399', desc: 'Measure O₂ production under different light intensities.' },
  { id: '5', title: 'Sorting Algorithms', subject: 'Computer Science', difficulty: 'Intermediate', icon: 'code-slash-outline', color: Colors.accentIndigo, desc: 'Visualize and compare sorting algorithms.' },
];

const FILTERS = ['All', 'Physics', 'Chemistry', 'Biology', 'CS'];

export default function LabScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header
        title="Virtual Lab"
        subtitle="Interactive experiments"
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
            {FILTERS.map((f) => (
              <SubjectChip key={f} label={f} onPress={() => {}} />
            ))}
          </ScrollView>

          {EXPERIMENTS.map((exp) => (
            <Card key={exp.id} onPress={() => {}} style={styles.expCard}>
              <View style={styles.expRow}>
                <View style={[styles.expIcon, { backgroundColor: exp.color + '20' }]}>
                  <Ionicons name={exp.icon} size={24} color={exp.color} />
                </View>
                <View style={styles.expInfo}>
                  <Text style={styles.expTitle}>{exp.title}</Text>
                  <Text style={styles.expDesc} numberOfLines={2}>{exp.desc}</Text>
                  <View style={styles.expMeta}>
                    <View style={[styles.badge, { backgroundColor: exp.color + '15' }]}>
                      <Text style={[styles.badgeText, { color: exp.color }]}>{exp.subject}</Text>
                    </View>
                    <View style={styles.badge}>
                      <Text style={styles.badgeTextMuted}>{exp.difficulty}</Text>
                    </View>
                  </View>
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
  chipRow: { paddingHorizontal: Spacing.base, paddingBottom: Spacing.sm },
  expCard: { marginHorizontal: Spacing.base, marginBottom: Spacing.md },
  expRow: { flexDirection: 'row', gap: Spacing.md },
  expIcon: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expInfo: { flex: 1 },
  expTitle: {
    fontSize: Typography.size.base,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
  },
  expDesc: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    marginTop: 4,
    lineHeight: Typography.size.sm * 1.4,
  },
  expMeta: { flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.sm },
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.bgTertiary,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: Typography.weight.semiBold,
  },
  badgeTextMuted: {
    fontSize: 10,
    fontWeight: Typography.weight.medium,
    color: Colors.textMuted,
  },
});
