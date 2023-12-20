import type { FlexStyle } from 'react-native';
import { getKeys, transformProperty } from '../util';
import { createRestyleFunction, type ResponsiveValue } from '@shopify/restyle';

const minified = {
  w: 'width',
  h: 'height',
  minw: 'minWidth',
  maxw: 'maxWidth',
  minh: 'minHeight',
  maxh: 'maxHeight',
  align: 'alignItems',
  justify: 'justifyContent',
  direction: 'flexDirection',
} as const;

const flexProperties = {
  flex: true,
  overflow: true,
  flexWrap: true,
  flexGrow: true,
  flexBasis: true,
  alignSelf: true,
  flexShrink: true,
  aspectRatio: true,
  alignContent: true,
} as const;

type MinifiedKeys = keyof typeof minified;
type FlexPropertiesKeys = keyof typeof flexProperties;
type AllKeys = MinifiedKeys | FlexPropertiesKeys;

const properties = { ...minified, ...flexProperties };

export const layout = getKeys(properties).map(key => {
  return createRestyleFunction(transformProperty(properties, key));
});

export type LayoutProps = {
  [Key in AllKeys]?: Key extends MinifiedKeys
    ? ResponsiveValue<FlexStyle[(typeof minified)[Key]], undefined>
    : Key extends FlexPropertiesKeys
    ? ResponsiveValue<FlexStyle[Key], undefined>
    : any;
};
