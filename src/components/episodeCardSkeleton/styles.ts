import {
    StyleSheet,
    ViewStyle,
} from 'react-native';

interface Styles {
    container: ViewStyle;
    contentContainer: ViewStyle;
    titleSkeleton: ViewStyle;
    subtitleSkeleton: ViewStyle;
    dateSkeleton: ViewStyle;
    shimmer: ViewStyle;
}

export default StyleSheet.create<Styles>({
    container: {
        padding: 8,
        margin: 12,
        marginTop: 0,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#DCDCDC',
    },

    contentContainer: {
        gap: 8,
    },

    titleSkeleton: {
        height: 20,
        width: '80%',
        backgroundColor: '#E1E1E1',
        overflow: 'hidden',
    },

    subtitleSkeleton: {
        height: 16,
        width: '50%',
        backgroundColor: '#E1E1E1',
        overflow: 'hidden',
    },

    dateSkeleton: {
        height: 14,
        width: '35%',
        backgroundColor: '#E1E1E1',
        overflow: 'hidden',
    },

    shimmer: {
        width: 80,
        height: '100%',
        backgroundColor: '#F5F5F5',
        opacity: 0.6,
    },
});