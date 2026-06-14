import {
    StyleSheet,
    TextStyle,
} from 'react-native';

interface Styles {
    headerText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    headerText: {
        color: '#000000',
        fontSize: 22,
        marginLeft: 12,
        marginBottom: 12,
        fontWeight: 'bold',
        backgroundColor: '#F0F0F0',
    },
});

export default styles;