import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  avatar: ViewStyle;
  content: ViewStyle;
  lineLarge: ViewStyle;
  lineSmall: ViewStyle;
  shimmer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E1E1E1',
    overflow: 'hidden',
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  lineLarge: {
    height: 14,
    width: '70%',
    backgroundColor: '#E1E1E1',
    marginBottom: 8,
    overflow: 'hidden',
  },

  lineSmall: {
    height: 14,
    width: '40%',
    backgroundColor: '#E1E1E1',
    overflow: 'hidden',
  },

  shimmer: {
    width: 80,
    height: '100%',
    backgroundColor: '#F5F5F5',
    opacity: 0.6,
  },
});

export default styles;