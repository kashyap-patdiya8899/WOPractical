import { RouteProp } from "@react-navigation/native";
import { ProgressiveImage } from "@WOPractical/component-library";
import { RootStackParamList, RouteName } from "@WOPractical/constants";
import { useCharacterDetail } from "@WOPractical/hooks/useCharacters";
import { useAppDispatch, useAppSelector } from "@WOPractical/store/hooks";
import { addFavourite, removeFavourite } from "@WOPractical/store/slices/favourites";
import { ActivityIndicator, FlatList, Pressable, Text, View } from "react-native";
import styles from "./styles";

interface Props {
    route: RouteProp<RootStackParamList, RouteName.CHARACTER>;
}

export default function CharacterDetail({ route }: Props) {
    const { characterId } = route.params
    const { data, isLoading, error } = useCharacterDetail(characterId);
    const dispatch = useAppDispatch();
    const favouriteIds = useAppSelector(state =>
        state.favourites.characters.map(character => character.id),
    );
    const isFavourite = data ? favouriteIds.includes(data.id) : false;

    if (isLoading) {
        return <ActivityIndicator />;
    }
    if (error) {
        return <Text>Something went wrong</Text>;
    }

    const renderItem = ({
        item,
        index,
    }: {
        item: string;
        index: number;
    }) => {
        return (
            <View style={styles.episodeCard}>
                <Text style={styles.episodeLabel}>
                    {'Episode:\n'}
                    <Text style={styles.episodeNumber}>
                        {index + 1}
                    </Text>
                </Text>
            </View>
        );
    };

    const handleFavourite = () => {
        if (!data) {
            return;
        }

        if (isFavourite) {
            dispatch(removeFavourite(data.id));
            return;
        }

        dispatch(addFavourite(data));
    }

    return (
        <View>
            <ProgressiveImage
                thumbnail={`${data?.image}?w=50`}
                uri={data?.image || ''}
                style={styles.characterImage}
                resizeMode="contain"
            />

            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>
                        {`${data?.name} (${data?.species})`}
                    </Text>

                    <Pressable onPress={handleFavourite}>
                        <Text
                            style={[
                                styles.favouriteText,
                                isFavourite
                                    ? styles.favouriteActive
                                    : styles.favouriteInactive,
                            ]}
                        >
                            {isFavourite ? 'Unfavourite' : 'Favourite'}
                        </Text>
                    </Pressable>
                </View>

                <Text style={styles.detailText}>
                    {`Status : ${data?.status}`}
                </Text>

                <Text style={styles.detailText}>
                    {`Type : ${data?.type}`}
                </Text>

                <Text style={styles.detailText}>
                    {`Gender : ${data?.gender}`}
                </Text>

                <Text style={styles.detailText}>
                    {`Origin : ${data?.origin.name}`}
                </Text>

                <Text style={styles.detailText}>
                    {`Location : ${data?.location.name}`}
                </Text>
            </View>
            <Text style={styles.episodesTitle}>Character appeared in episodes: </Text>

            <FlatList
                data={data?.episode}
                horizontal
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}