import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

import { createStyled } from '@library/restyle';
import { ComponentProps } from 'react';

const SafeAreaView = createStyled(RNSafeAreaView);

type SafeAreaViewProps = ComponentProps<typeof SafeAreaView>;

export { SafeAreaView };
export type { SafeAreaViewProps };
