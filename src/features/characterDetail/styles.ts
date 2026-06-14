import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface Styles {
  characterImage: ImageStyle;
  contentContainer: ViewStyle;
  headerContainer: ViewStyle;
  title: TextStyle;
  favouriteText: TextStyle;
  favouriteActive: TextStyle;
  favouriteInactive: TextStyle;
  detailText: TextStyle;

  episodeCard: ViewStyle;
  episodeLabel: TextStyle;
  episodeNumber: TextStyle;

  episodesTitle: TextStyle;
  listContent: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  characterImage: {
    height: 240,
    width: '100%',
  },

  contentContainer: {
    margin: 12,
    gap: 8,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    flexShrink: 1,
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
  },

  favouriteText: {
    fontWeight: '600',
  },

  favouriteActive: {
    color: 'blue',
  },

  favouriteInactive: {
    color: '#000000',
  },

  detailText: {
    color: '#000000',
  },

  episodeCard: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 12,
    marginTop: 12,
  },

  episodeLabel: {
    fontSize: 9,
    textAlign: 'center',
    marginTop: 4,
  },

  episodeNumber: {
    fontSize: 18,
  },

  episodesTitle: {
    marginLeft: 12,
    color: 'gray',
  },

  listContent: {
    paddingRight: 12
  }
});

export default styles;
