import React from 'react';

import { useTheme } from '@theme/index';

import FastImage from 'react-native-fast-image';
import { ActivityIndicator, View } from '@components/common';

import type { ImageProps } from './type';

const fallback_img = 'https://source.unsplash.com/random/3840x2160/?cars';

export const Image: React.FC<ImageProps> = props => {
  const { source, resizeMode = FastImage.resizeMode.cover, ...rest } = props;

  const { layout } = useTheme();
  const [isLoading, setLoading] = React.useState(true);
  const [errOccured, setErrOccured] = React.useState<null | boolean>(null);

  const handleLoadStart = () => {
    setLoading(true);
    setErrOccured(null);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setErrOccured(true);
  };

  const SOURCE = React.useMemo(() => {
    if (errOccured) {
      return require('@assets/images/no-img-available.jpeg');
    }
    if (source) {
      if (typeof source === 'object') {
        const uri = source.uri ? source.uri : fallback_img;
        return { uri, priority: FastImage.priority.high };
      }
      return source;
    }
    return { uri: fallback_img, priority: FastImage.priority.high };
  }, [errOccured, source, fallback_img]);

  return (
    <View overflow="hidden" flex={1} {...rest}>
      <FastImage
        fallback
        onError={handleError}
        resizeMode={resizeMode}
        style={[layout.fullSize]}
        onLoadEnd={handleLoadEnd}
        onLoadStart={handleLoadStart}
        source={SOURCE}
      />
      {isLoading && (
        <View center absoluteFill fullSize bg="black_50">
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};
