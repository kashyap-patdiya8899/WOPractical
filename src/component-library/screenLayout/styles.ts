import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
    }
});

export default styles;