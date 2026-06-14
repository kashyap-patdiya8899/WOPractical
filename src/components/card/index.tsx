import navigationRef from '@WOPractical/app/navigationRef';
import { ProgressiveImage } from '@WOPractical/component-library';
import { RouteName } from '@WOPractical/constants';
import { Character } from '@WOPractical/types';
import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  item: Character;
}

/**
 * Displays a character summary card.
 *
 * Shows:
 * - Character image
 * - Name and species
 * - Current status
 * - Last known location
 *
 * Navigates to the Character Detail screen when pressed.
 *
 * @param {Character} props.item Character data.
 */
function Card({ item }: Props) {

  const onClickHandle = (_id: string) => {
    navigationRef.current?.navigate(RouteName.CHARACTER, {
      characterId: _id
    })
  }

  return (
    <Pressable style={styles.container} onPress={() => onClickHandle(String(item.id))}>
      <ProgressiveImage
        style={styles.image}
        thumbnail={`${item.image}?w=50`}
        uri={item.image}
      />

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.nameText}>
            {item.name} ({item.species})
          </Text>

          <Text style={styles.statusText}>
            Status: {item.status}
          </Text>
        </View>

        <Text style={styles.locationText}>
          Last known location - {item.location.name}
        </Text>
      </View>
    </Pressable>
  );
}

export default memo(Card);