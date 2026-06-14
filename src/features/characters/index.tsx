import { ScreenLayout } from '@WOPractical/component-library';
import { Card, CardSkeleton, FilterModal } from '@WOPractical/components';
import { useCharacters, useDebounce } from '@WOPractical/hooks';
import { useAppDispatch, useAppSelector } from '@WOPractical/store/hooks';
import { setSavedFilter } from '@WOPractical/store/slices/app';
import { Character } from '@WOPractical/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Animated,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Pressable,
    Text,
    TextInput,
    View
} from 'react-native';
import styles from './styles';

const SCROLL_THRESHOLD = 5;

export default function Characters() {
    const lastScrollY = useRef(0);
    const translateY = useRef(new Animated.Value(0)).current;
    const headerVisible = useRef(true);

    const loadingRef = useRef(false);

    const [searchText, setSearchText] = useState('');

    const savedFilter = useAppSelector(
        state => state.app.savedFilter
    );

    const [status, setStatus] = useState(
        savedFilter?.status ?? ''
    );

    const [gender, setGender] = useState(
        savedFilter?.gender ?? ''
    );

    const dispatch = useAppDispatch();

    const [showFilter, setShowFilter] = useState(false);

    const debouncedSearch = useDebounce(searchText.trim(), 300);

    const {
        data,
        isPending,
        isFetching,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useCharacters(debouncedSearch, status, gender);

    const charactersData =
        data?.pages.flatMap(page => page.results) ?? [];

    const isSearching = isFetching && !isFetchingNextPage;

    useEffect(() => {
        dispatch(
            setSavedFilter({
                status,
                gender,
            }),
        );
    }, [status, gender, dispatch]);

    const renderItem = useCallback(({ item }: { item: Character }) => <Card item={item} />, [],);

    const loadMore = async () => {
        if (loadingRef.current || !hasNextPage || isFetchingNextPage) return;

        loadingRef.current = true;

        try {
            await fetchNextPage();
        } finally {
            loadingRef.current = false;
        }
    };

    const renderFooter = useCallback(() => {
        if (!isFetchingNextPage) return null;

        return <ActivityIndicator size="large" />;
    }, [isFetchingNextPage]);

    const renderEmpty = useCallback(() => {
        if (isSearching) return null;
        return <Text style={styles.emptyText}>No characters found</Text>;
    }, [isSearching]);

    const handleFilterClick = () => {
        setShowFilter(true);
    };

    const closeFilterModal = (tempStatus: string, tempGender: string) => {
        const hasChanges = tempStatus !== status || tempGender !== gender;

        if (hasChanges) {
            setStatus(tempStatus);
            setGender(tempGender);
        }
        setShowFilter(false);
    };

    const showHeader = () => {
        headerVisible.current = true;
        Animated.timing(translateY, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true
        }).start();
    }

    const hideHeader = () => {
        headerVisible.current = false;
        Animated.timing(translateY, {
            toValue: -100,
            duration: 250,
            useNativeDriver: true
        }).start();
    }

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentY = event.nativeEvent.contentOffset.y;
        const diff = currentY - lastScrollY.current

        if (currentY <= 0) {
            if (!headerVisible.current) {
                showHeader();
            }
        } else if (diff > SCROLL_THRESHOLD && headerVisible.current) {
            hideHeader()
        } else if (diff < -SCROLL_THRESHOLD && !headerVisible.current) {
            showHeader();
        }
        lastScrollY.current = currentY
    }

    return (
        <ScreenLayout disableScroll>
            <View style={styles.container}>
                <Animated.View style={[
                    styles.header,
                    { transform: [{ translateY: translateY }] }
                ]}>
                    <Text style={styles.title}>Characters List</Text>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search by name..."
                            value={searchText}
                            onChangeText={setSearchText}
                            autoCapitalize="none"
                            autoCorrect={false}
                            clearButtonMode="while-editing"
                        />
                        <Pressable onPress={handleFilterClick}>
                            <Text style={styles.filterButton}>Filters</Text>
                        </Pressable>
                    </View>
                </Animated.View>

                {isPending ? (
                    <FlatList
                        data={Array.from({ length: 10 })}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={() => <CardSkeleton />}
                    />
                ) : error ? (
                    <Text style={styles.emptyText}>Something went wrong</Text>
                ) : (
                    <FlatList
                        style={styles.list}
                        data={charactersData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        onEndReached={loadMore}
                        onEndReachedThreshold={0.5}
                        contentContainerStyle={styles.listContent}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        ListFooterComponent={renderFooter}
                        ListEmptyComponent={renderEmpty}
                        keyboardShouldPersistTaps="handled"
                    />
                )}
                <FilterModal closeFilterModal={closeFilterModal} showFilter={showFilter} />
            </View>
        </ScreenLayout>
    );
}
