import { ScreenLayout } from "@WOPractical/component-library";
import { EpisodeCardSkeleton, EpisodesCard } from "@WOPractical/components";
import { useEpisodes } from "@WOPractical/hooks";
import { Episode } from "@WOPractical/types";
import { useCallback } from "react";
import { ActivityIndicator, FlatList, SectionList, Text } from "react-native";
import styles from "./styles";

export default function Episodes() {
    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useEpisodes();

    const episodesData =
        data?.pages.flatMap(page => page.results) ?? [];

    const groupedEpisodes = Object.values(
        episodesData.reduce((acc, episodes) => {
            const season = episodes.episode.substring(0, 3);

            if (!acc[season]) {
                acc[season] = {
                    title: season,
                    data: []
                }
            }

            acc[season].data.push(episodes)
            return acc
        }, {} as Record<string, { title: string, data: Episode[] }>)
    )

    const renderItem = useCallback(
        ({ item }: { item: Episode }) => (
            <EpisodesCard item={item} />
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

    if (error) {
        return <Text>Something went wrong</Text>;
    }

    return (
        <ScreenLayout disableScroll>
            <Text style={styles.headerText}>Episodes</Text>
            {isLoading ?
                <FlatList
                    data={Array.from({ length: 8 })}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={() => <EpisodeCardSkeleton />}
                />
                :
                <SectionList
                    sections={groupedEpisodes}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.headerText}>{section.title}</Text>
                    )}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooter}
                />
            }
        </ScreenLayout>
    );
}
