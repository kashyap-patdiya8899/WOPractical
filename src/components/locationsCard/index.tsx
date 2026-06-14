import navigationRef from '@WOPractical/app/navigationRef';
import { RouteName } from '@WOPractical/constants';
import { Location } from '@WOPractical/types/locations';
import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface Props {
  item: Location;
}

/**
 * Displays a location summary card.
 *
 * Shows:
 * - Location name
 * - Number of residents
 * - Dimension
 * - Location type
 *
 * Navigates to the Location Detail screen when pressed.
 *
 * @param {Location} props.item Location data.
 */
function LocationsCard({ item }: Props) {

  const onClickHandle = () => {
    navigationRef.current?.navigate(RouteName.LOCATION, {
      location: item,
    });
  };

  return (
    <Pressable style={styles.container} onPress={onClickHandle}>
      <View style={styles.contentContainer}>
        <Text style={styles.statusText}>
          {item.name}
        </Text>
        <Text>{`Residents : ${item.residents.length}`}</Text>
        <View style={styles.headerRow}>
          <Text style={styles.nameText}>
            {`Dimension : ${item.dimension}`}
          </Text>
          <Text style={styles.nameText}>
            {`Type : ${item.type}`}
          </Text>

        </View>
      </View>
    </Pressable>
  );
}

export default memo(LocationsCard);