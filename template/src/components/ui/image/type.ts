import type { ViewProps } from '@components/common';
import type { FastImageProps } from 'react-native-fast-image';

export type ImageProps = Pick<FastImageProps, 'source' | 'resizeMode'> & ViewProps;
