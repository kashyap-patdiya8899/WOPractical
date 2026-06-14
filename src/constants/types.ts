import { Episode } from "@WOPractical/types"
import { Location } from "@WOPractical/types/locations"
import { BottomRouteName, RouteName } from "./routes"

export type RootStackParamList = {
    [RouteName.BOTTOM_BAR]: TabStackRoutesAndParameters
    [RouteName.CHARACTER]: { characterId: string }
    [RouteName.EPISODE]: { episode: Episode }
    [RouteName.LOCATION]: { location: Location }
}

export type TabStackRoutesAndParameters = {
    [BottomRouteName.CHARACTERS]: undefined
    [BottomRouteName.EPISODES]: undefined
    [BottomRouteName.LOCATIONS]: undefined
    [BottomRouteName.FAVOURITES]: undefined
}