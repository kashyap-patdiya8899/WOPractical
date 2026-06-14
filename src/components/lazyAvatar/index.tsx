import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  View,
} from 'react-native';
import styles from './styles';

type Props = {
  uri: string;
};

/**
 * Displays a character avatar with a loading indicator.
 *
 * Shows an ActivityIndicator while the image is loading
 * and fades in the image once loading is complete.
 *
 * @param {Props} props Component props.
 * @param {string} props.uri Image URL.
 */
export default function LazyAvatar({ uri }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          style={styles.loader}
        />
      )}

      <Image
        source={{ uri }}
        style={[
          styles.image,
          {
            opacity: loading ? 0 : 1,
          },
        ]}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}
