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
        RouteName.LOCATION
    >;
    route: RouteProp<RootStackParamList, RouteName.LOCATION>
}

export default function LocationDetails({ navigation, route }: Props) {
    console.log('route', route);
    const { location } = route.params
    console.log('episode', location);

    useEffect(() => {
        navigation.setOptions({ title: location.name });
    }, [navigation]);

    const residents = location.residents.map(item => {
        const id = item.split('/').pop();

        return item.replace(
            `/character/${id}`,
            `/character/avatar/${id}.jpeg`
        );
    });

    const formattedResidents = [...residents];

    while (formattedResidents.length % 3 !== 0) {
        formattedResidents.push('');
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
            <Text style={styles.titleText}>
                Residents
            </Text>
            {formattedResidents.length === 0 && <Text style={styles.emptyText}>No residents available</Text>}
            <FlatList
                numColumns={3}
                data={formattedResidents}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}
