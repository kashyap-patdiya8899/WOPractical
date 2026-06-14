import { StyleSheet, TextStyle } from "react-native";

interface Style {
    title: TextStyle;
    contentStyle: TextStyle;
}

export default StyleSheet.create<Style>({
    title: {
        color: '#000000',
        fontSize: 22,
        marginLeft: 12,
        marginBottom: 12,
        fontWeight: 'bold',
        backgroundColor: '#F0F0F0'
    },
    contentStyle: {
        paddingBottom: 60,
    }
})