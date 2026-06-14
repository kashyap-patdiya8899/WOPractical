import FilterChip from "@WOPractical/components/filterChip";
import { useAppSelector } from "@WOPractical/store/hooks";
import { useEffect, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import styles from "./styles";

const STATUS_OPTIONS = [
    { label: 'All', value: '' },
    { label: 'Alive', value: 'alive' },
    { label: 'Dead', value: 'dead' },
    { label: 'Unknown', value: 'unknown' },
] as const;

const GENDER_OPTIONS = [
    { label: 'All', value: '' },
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
] as const;

interface Props {
    showFilter: boolean;
    closeFilterModal: (tempStatus: string, tempGender: string) => void;
}

/**
 * Modal for filtering characters.
 *
 * Allows users to filter the character list by:
 * - Status
 * - Gender
 *
 * Selected filter values are returned to the parent
 * component when the modal is closed.
 *
 * @param {boolean} props.showFilter Controls modal visibility.
 * @param {(status: string, gender: string) => void} props.closeFilterModal
 * Callback invoked when the modal is closed.
 */
export default function FilterModal({ showFilter, closeFilterModal }: Props) {
    const savedFilter = useAppSelector(
        state => state.app.savedFilter
    );

    const [tempStatus, setTempStatus] = useState(savedFilter?.status);
    const [tempGender, setTempGender] = useState(savedFilter?.gender);

    useEffect(() => {
        if (showFilter) {
            setTempStatus(savedFilter?.status ?? '');
            setTempGender(savedFilter?.gender ?? '');
        }
    }, [showFilter, savedFilter]);

    const handleCloseModal = () => {
        closeFilterModal(tempStatus || '', tempGender || '')
    }

    return <Modal
        visible={showFilter}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
    >
        <Pressable
            style={styles.modalOverlay}
            onPress={handleCloseModal}
        >
            <Pressable style={styles.modalContent} onPress={() => { }}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Filters</Text>
                    <Pressable onPress={handleCloseModal}>
                        <Text style={styles.modalClose}>Done</Text>
                    </Pressable>
                </View>

                <View style={styles.filterSection}>
                    <Text style={styles.filterLabel}>Status</Text>
                    <View style={styles.chipRow}>
                        {STATUS_OPTIONS.map(option => (
                            <FilterChip
                                key={option.value}
                                label={option.label}
                                selected={tempStatus === option.value}
                                onPress={() => setTempStatus(option.value)}
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.filterSection}>
                    <Text style={styles.filterLabel}>Gender</Text>
                    <View style={styles.chipRow}>
                        {GENDER_OPTIONS.map(option => (
                            <FilterChip
                                key={option.value}
                                label={option.label}
                                selected={tempGender === option.value}
                                onPress={() => setTempGender(option.value)}
                            />
                        ))}
                    </View>
                </View>
            </Pressable>
        </Pressable>
    </Modal>
}