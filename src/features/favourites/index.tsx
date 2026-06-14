import { useCallback } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { Card } from '@WOPractical/components';
import { ScreenLayout } from '@WOPractical/component-library';
import { Character } from '@WOPractical/types';
import { useAppSelector } from '@WOPractical/store/hooks';
import styles from './styles';

export default function Favourites() {
  const { characters, isHydrated } = useAppSelector(state => state.favourites);

  const renderItem = useCallback(
    ({ item }: { item: Character }) => <Card item={item} />,
    [],
  );

  const renderEmpty = useCallback(() => {
    if (!isHydrated) {
      return null;
    }

    return (
      <Text style={styles.emptyText}>
        No favourite characters yet.
      </Text>
    );
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <ScreenLayout>
        <ActivityIndicator style={styles.loader} size="large" />
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout disableScroll>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        style={styles.list}
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={renderEmpty}
      />
    </ScreenLayout>
  );
}
