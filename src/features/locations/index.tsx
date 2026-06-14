import { ScreenLayout } from "@WOPractical/component-library";
import { EpisodeCardSkeleton, LocationsCard } from "@WOPractical/components";
import { useLocations } from "@WOPractical/hooks";
import { Location } from "@WOPractical/types/locations";
import { useCallback } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import styles from "./styles";

export default function Locations() {
    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useLocations();

    const locationsData =
        data?.pages.flatMap(page => page.results) ?? [];

    const renderItem = useCallback(
        ({ item }: { item: Location }) => (
            <LocationsCard item={item} />
        ),
        [],
    );

    const loadMore = useCallback(() => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    const renderFooter = useCallback(() => {
        if (!isFetchingNextPage) return null;

        return <ActivityIndicator size="large" />;
    }, [isFetchingNextPage]);

    if (isLoading) {
        return <ActivityIndicator />;
    }

    if (error) {
        return <Text>Something went wrong</Text>;
    }

    return (
        <ScreenLayout disableScroll>
            <Text style={styles.title}>Locations</Text>
            {isLoading ?
                <FlatList
                    data={Array.from({ length: 8 })}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={() => <EpisodeCardSkeleton />}
                />
                :
                <FlatList
                    data={locationsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.contentStyle}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooter}
                />
            }
        </ScreenLayout>
    );
}
