import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    chipRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    chip: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#D0D0D0',
        backgroundColor: '#FFFFFF',
    },
    chipSelected: {
        borderColor: '#007AFF',
        backgroundColor: '#E8F2FF',
    },
    chipText: {
        fontSize: 13,
        color: '#333333',
        textTransform: 'capitalize',
    },
    chipTextSelected: {
        color: '#007AFF',
        fontWeight: '600',
    },
})