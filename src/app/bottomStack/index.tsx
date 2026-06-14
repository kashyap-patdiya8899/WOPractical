import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomRouteName, TabStackRoutesAndParameters } from "@WOPractical/constants";
import { useAppDispatch, useAppSelector } from "@WOPractical/store/hooks";
import { changeTab } from "@WOPractical/store/slices/app";
import React, { lazy } from "react";

const Characters = lazy(
    () => import('../../features/characters')
);

const Episodes = lazy(
    () => import('../../features/episodes')
);

const Locations = lazy(
    () => import('../../features/locations')
);

const Favourites = lazy(
    () => import('../../features/favourites')
);

const Tab = createBottomTabNavigator<TabStackRoutesAndParameters>();

export default function BottomStack() {

    const dispatch = useAppDispatch();
    const initialRouteName = useAppSelector(state => state.app.initialRouteName);
    console.log("🚀 ~ BottomStack ~ initialTab:", initialRouteName)

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarIconStyle: { display: "none" }, tabBarLabelPosition: "beside-icon", }} initialRouteName={initialRouteName}
            screenListeners={{
                state: (e) => {
                    const index = e.data.state?.index;
                    const routeName = e.data.state?.routeNames[index];

                    if (routeName) {
                        dispatch(changeTab(routeName as keyof TabStackRoutesAndParameters));
                    }
                },
            }}>
            <Tab.Screen name={BottomRouteName.CHARACTERS} component={Characters} />
            <Tab.Screen name={BottomRouteName.EPISODES} component={Episodes} />
            <Tab.Screen name={BottomRouteName.LOCATIONS} component={Locations} />
            <Tab.Screen name={BottomRouteName.FAVOURITES} component={Favourites} />
        </Tab.Navigator>
    );
}