import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 56,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 6,
  },
  chipsRow: {
    marginTop: 8,
    marginBottom: 16,
    flexGrow: 0,
    minHeight: 50,
  },
  chipsContent: {
    paddingLeft: 2,
    paddingRight: 10,
    paddingVertical: 4,
    alignItems: 'center',
  },
  chip: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  chipActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  chipText: {
    fontSize: 12,
    color: '#334155',
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#fff',
  },
  list: {
    flex: 1,
  },
  listContainer: {
    paddingTop: 4,
    paddingBottom: 16,
  },
});
