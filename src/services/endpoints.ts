export const endpoints = {
    characters: {
        list: '/character',
        detail: (characterId: string) => `/character/${characterId}`,
    },
    episodes: '/episode',
    locations: '/location',
}