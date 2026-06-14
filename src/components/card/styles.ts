import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  contentContainer: ViewStyle;
  headerRow: ViewStyle;
  nameText: TextStyle;
  statusText: TextStyle;
  locationText: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    flex: 1,
    fontWeight: '600',
  },
  statusText: {
    marginLeft: 8,
    fontSize: 12,
    color: '#646464',
  },
  locationText: {
    marginTop: 4,
    fontSize: 12,
    color: '#646464',
  },
});