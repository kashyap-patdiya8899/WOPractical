import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 12,
    overflow: 'hidden',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  listContent: {
    paddingTop: 100,
  },
  listItem: {
    height: 40,
    backgroundColor: 'pink',
    alignItems: 'center',
    marginTop: 20,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  filterSection: {
    marginTop: 12,
  },
  filterButton: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  modalClose: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333333',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    backgroundColor: '#FFFFFF',
  },
  chipSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#E8F2FF',
  },
  chipText: {
    fontSize: 13,
    color: '#333333',
    textTransform: 'capitalize',
  },
  chipTextSelected: {
    color: '#007AFF',
    fontWeight: '600',
  },
  loader: {
    marginTop: 24,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 16,
    color: '#646464',
  },
  list: {
  },
});
