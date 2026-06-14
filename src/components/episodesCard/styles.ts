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
    margin: 12,
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#DCDCDC',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  contentContainer: {
    flexShrink: 1,
    gap: 4,
    marginHorizontal: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    color: '#646464',
    fontWeight: '600',
  },
  statusText: {
    fontSize: 18,
  },
  locationText: {
    marginTop: 4,
    fontSize: 12,
    color: '#646464',
  },
});