import { ComponentProps } from 'react';
import { createStyled } from '@library/restyle';
import { ScrollView as RNScrollView } from 'react-native';

const ScrollView = createStyled(RNScrollView);

type ScrollViewProps = ComponentProps<typeof ScrollView>;

export { ScrollView };
export type { ScrollViewProps };
