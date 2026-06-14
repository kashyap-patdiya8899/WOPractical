import { LazyAvatar } from "@WOPractical/components";
import { RootStackParamList, RouteName } from "@WOPractical/constants";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";

interface Props {
    navigation: NativeStackNavigationProp<
        RootStackParamList,
        RouteName.EPISODE
    >;
    route: RouteProp<RootStackParamList, RouteName.EPISODE>
}

export default function EpisodeDetails({ navigation, route }: Props) {
    console.log('route', route);
    const { episode } = route.params
    console.log('episode', episode);

    useEffect(() => {
        navigation.setOptions({ title: episode.episode });
    }, [navigation]);

    const characters = episode.characters.map(item => {
        const id = item.split('/').pop();

        return item.replace(
            `/character/${id}`,
            `/character/avatar/${id}.jpeg`
        );
    });

    const formattedCharacters = [...characters];

    while (formattedCharacters.length % 3 !== 0) {
        formattedCharacters.push('');
    }

    const renderItem = useCallback(
        ({ item }: { item: string }) => {
            if (!item) {
                return (
                    <View style={styles.emptyResidentContainer} />
                );
            }

            return (
                <View style={styles.residentContainer}>
                    <LazyAvatar uri={item} />
                </View>
            );
        },
        [],
    );

    return (
        <View>
            <Text style={styles.titleText}>Characters</Text>
            <FlatList
                numColumns={3}
                data={formattedCharacters}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}
