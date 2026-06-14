import React, { useEffect, useRef } from 'react';
import {
  Animated,
  View
} from 'react-native';
import styles from './styles';

/**
 * Animated shimmer placeholder shown while
 * character cards are loading.
 */
export default function CardSkeleton() {
  const shimmer = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmer, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
  }, [shimmer]);

  const translateX = shimmer.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 400],
  });

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Animated.View
          style={[
            styles.shimmer,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.lineLarge}>
          <Animated.View
            style={[
              styles.shimmer,
              {
                transform: [{ translateX }],
              },
            ]}
          />
        </View>

        <View style={styles.lineSmall}>
          <Animated.View
            style={[
              styles.shimmer,
              {
                transform: [{ translateX }],
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
