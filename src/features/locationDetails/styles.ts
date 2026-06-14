import {
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface Styles {
  statusText: TextStyle;
  headerRow: ViewStyle;
  nameText: TextStyle;
  titleText: TextStyle;
  emptyText: TextStyle;
  residentContainer: ViewStyle;
  emptyResidentContainer: ViewStyle;
  listContent: ViewStyle;
}

export default StyleSheet.create<Styles>({
  statusText: {
    fontSize: 18,
    marginLeft: 12,
  },

  headerRow: {
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nameText: {
    color: '#646464',
    fontWeight: '600',
  },

  titleText: {
    marginVertical: 12,
    marginLeft: 12,
    fontSize: 18,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 24,
  },

  residentContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 12,
  },

  emptyResidentContainer: {
    flex: 1,
    marginBottom: 12,
  },

  listContent: {
    paddingBottom: 60,
  },
});