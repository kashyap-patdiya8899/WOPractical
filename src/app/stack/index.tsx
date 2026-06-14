import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, RouteName } from "@WOPractical/constants";
import { useAppDispatch } from "@WOPractical/store/hooks";
import { loadFavourites } from "@WOPractical/store/slices/favourites";
import React, { lazy } from "react";
import BottomStack from "../bottomStack";

const CharacterDetail = lazy(
    () => import('../../features/characterDetail')
);

const EpisodeDetail = lazy(
    () => import('../../features/episodeDetails')
);

const LocationDetail = lazy(
    () => import('../../features/locationDetails')
);

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(loadFavourites());
    }, [dispatch]);

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={RouteName.BOTTOM_BAR} component={BottomStack} />
            <Stack.Screen name={RouteName.CHARACTER} component={CharacterDetail} initialParams={{ characterId: '' }} options={{ headerShown: true }} />
            <Stack.Screen name={RouteName.EPISODE} component={EpisodeDetail} options={{ headerShown: true }} />
            <Stack.Screen name={RouteName.LOCATION} component={LocationDetail} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}