import {
  ImageStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface Styles {
  container: ViewStyle;
  loader: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loader: {
    position: 'absolute',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default styles;