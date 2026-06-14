import React, { useEffect, useRef } from 'react';
import {
    Animated,
    View,
} from 'react-native';
import styles from './styles';

/**
 * Animated shimmer placeholder shown while
 * character cards are loading.
 */
export default function EpisodeCardSkeleton() {
    const shimmer = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(shimmer, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
        ).start();
    }, [shimmer]);

    const translateX = shimmer.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 300],
    });

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.titleSkeleton}>
                    <Animated.View
                        style={[
                            styles.shimmer,
                            { transform: [{ translateX }] },
                        ]}
                    />
                </View>

                <View style={styles.subtitleSkeleton}>
                    <Animated.View
                        style={[
                            styles.shimmer,
                            { transform: [{ translateX }] },
                        ]}
                    />
                </View>

                <View style={styles.dateSkeleton}>
                    <Animated.View
                        style={[
                            styles.shimmer,
                            { transform: [{ translateX }] },
                        ]}
                    />
                </View>
            </View>
        </View>
    );
}