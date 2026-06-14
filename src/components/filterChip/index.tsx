import { Pressable, Text } from "react-native";
import styles from "./styles";

interface FilterChipProps {
    label: string;
    selected: boolean;
    onPress: () => void;
};

export default function FilterChip({ label, selected, onPress }: FilterChipProps) {
    return (
        <Pressable
            style={[styles.chip, selected && styles.chipSelected]}
            onPress={onPress}
        >
            <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                {label}
            </Text>
        </Pressable>
    );
}