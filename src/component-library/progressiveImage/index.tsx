import React, { useState } from 'react';
import {
  View,
  Image,
  Animated,
  StyleProp,
  ImageStyle,
  ImageProps,
} from 'react-native';
import styles from './styles';

interface Props extends ImageProps {
  thumbnail: string;
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export default function ProgressiveImage({
  thumbnail,
  uri,
  style,
  ...rest
}: Props) {
  const [opacity] = useState(new Animated.Value(0));

  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Image
        source={{ uri: thumbnail }}
        style={[styles.thumbnail, style]}
        blurRadius={2}
        {...rest}
      />

      <Animated.Image
        source={{ uri: uri }}
        style={[
          styles.image,
          style,
          {
            opacity,
          },
        ]}
        onLoad={onLoad}
        {...rest}
      />
    </View>
  );
}