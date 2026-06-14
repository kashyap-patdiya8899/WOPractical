import navigationRef from '@WOPractical/app/navigationRef';
import { RouteName } from '@WOPractical/constants';
import { Episode } from '@WOPractical/types';
import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  item: Episode;
}

/**
 * Displays episode summary information.
 *
 * Shows:
 * - Episode (e.g. S01E01)
 * - Episode name
 * - Number of characters appearing in the episode
 * - Air date
 *
 * Navigates to the Episode Detail screen when pressed.
 *
 * @param {Episode} props.item Episode data.
 */
function EpisodesCard({ item }: Props) {

  const handleEpisodeClick = () => {
    navigationRef.current?.navigate(RouteName.EPISODE, {
      episode: item
    })
  }

  return (
    <Pressable style={styles.container} onPress={handleEpisodeClick}>
      <View style={styles.contentContainer}>
        <Text style={styles.statusText}>
          {`${item.episode} - ${item.name}`}
        </Text>
        <Text>{`Characters : ${item.characters.length}`}</Text>
        <View style={styles.headerRow}>
          <Text style={styles.nameText}>
            {item.air_date}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default memo(EpisodesCard);