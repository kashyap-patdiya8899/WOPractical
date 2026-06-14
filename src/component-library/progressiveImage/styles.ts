import { ImageStyle, StyleSheet } from 'react-native';

interface Styles {
    thumbnail: ImageStyle;
    image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
    thumbnail: {
        position: 'absolute',
        width: 80,
        height: 80,
    },
    image: {
        width: 80,
        height: 80,
    },
});

export default styles;