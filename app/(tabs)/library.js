/**
 * Library Screen — Resource catalog with category tabs.
 */
import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Animated,
  Pressable,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '../../constants/theme';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

const { width } = Dimensions.get('window');

const CATEGORIES = [
  { key: 'all', label: 'All', icon: 'grid-outline' },
  { key: 'books', label: 'Books', icon: 'book-outline' },
  { key: 'notes', label: 'Notes', icon: 'document-text-outline' },
  { key: 'videos', label: 'Videos', icon: 'videocam-outline' },
];

const RESOURCES = [
  { id: '1', title: 'NCERT Physics Class 12', type: 'books', icon: 'book', color: Colors.accentBlue, pages: 420, author: 'NCERT' },
  { id: '2', title: 'Organic Chemistry Notes', type: 'notes', icon: 'document-text', color: Colors.accentTeal, pages: 85, author: 'Dr. Sharma' },
  { id: '3', title: 'Quantum Mechanics Lecture', type: 'videos', icon: 'videocam', color: '#F59E0B', duration: '1h 24m', author: 'Prof. Patel' },
  { id: '4', title: 'Calculus Formula Sheet', type: 'notes', icon: 'document-text', color: Colors.accentIndigo, pages: 12, author: 'Math Dept.' },
  { id: '5', title: 'Biology Lab Manual', type: 'books', icon: 'book', color: '#34D399', pages: 200, author: 'CBSE' },
  { id: '6', title: 'Data Structures Tutorial', type: 'videos', icon: 'videocam', color: Colors.accentCyan, duration: '45m', author: 'CS Academy' },
  { id: '7', title: 'Thermodynamics Handbook', type: 'books', icon: 'book', color: '#FB7185', pages: 310, author: 'HC Verma' },
  { id: '8', title: 'Integration Techniques', type: 'notes', icon: 'document-text', color: Colors.accentBlue, pages: 28, author: 'RD Sharma' },
];

export default function LibraryScreen() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, []);

  const filtered = RESOURCES.filter((r) => {
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'all' || r.type === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Header title="Library" subtitle="Your learning resources" />
      <SearchBar placeholder="Search resources..." value={search} onChangeText={setSearch} style={styles.search} />

      {/* Category Tabs */}
      <View style={styles.categoryRow}>
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <Pressable
              key={cat.key}
              onPress={() => setActiveCategory(cat.key)}
              style={[styles.catTab, isActive && styles.catTabActive]}
            >
              <Ionicons name={cat.icon} size={16} color={isActive ? Colors.accentTeal : Colors.textMuted} />
              <Text style={[styles.catLabel, isActive && styles.catLabelActive]}>{cat.label}</Text>
            </Pressable>
          );
        })}
      </View>

      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.gridRow}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card onPress={() => {}} style={styles.resourceCard}>
            <View style={[styles.resourceIcon, { backgroundColor: item.color + '20' }]}>
              <Ionicons name={item.icon} size={28} color={item.color} />
            </View>
            <Text style={styles.resourceTitle} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.resourceAuthor}>{item.author}</Text>
            <View style={styles.resourceMeta}>
              <Text style={styles.metaText}>
                {item.pages ? `${item.pages} pages` : item.duration}
              </Text>
            </View>
          </Card>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="folder-open-outline" size={48} color={Colors.textMuted} />
            <Text style={styles.emptyText}>No resources found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Colors.bgPrimary },
  search: { marginTop: Spacing.sm },
  categoryRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.base,
    paddingTop: Spacing.base,
    paddingBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  catTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.bgTertiary,
    gap: 6,
  },
  catTabActive: {
    backgroundColor: Colors.accentTeal + '20',
    borderWidth: 1,
    borderColor: Colors.accentTeal + '50',
  },
  catLabel: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.medium,
    color: Colors.textMuted,
  },
  catLabelActive: { color: Colors.accentTeal },
  grid: {
    paddingHorizontal: Spacing.base,
    paddingBottom: Spacing['3xl'],
    paddingTop: Spacing.sm,
  },
  gridRow: {
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  resourceCard: {
    flex: 1,
    padding: Spacing.base,
    alignItems: 'center',
  },
  resourceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  resourceTitle: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semiBold,
    color: Colors.textPrimary,
    textAlign: 'center',
    lineHeight: Typography.size.sm * 1.4,
  },
  resourceAuthor: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 4,
  },
  resourceMeta: {
    marginTop: Spacing.sm,
    backgroundColor: Colors.bgTertiary,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
  },
  metaText: {
    fontSize: 10,
    color: Colors.textSecondary,
    fontWeight: Typography.weight.medium,
  },
  empty: {
    alignItems: 'center',
    paddingTop: Spacing['5xl'],
  },
  emptyText: {
    fontSize: Typography.size.base,
    color: Colors.textMuted,
    marginTop: Spacing.md,
  },
});
