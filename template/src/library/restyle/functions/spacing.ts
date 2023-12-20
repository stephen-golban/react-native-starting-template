import { getKeys } from '../util';
import { SPACING, type Spacing } from '@theme/metrics';
import { createRestyleFunction, type RNStyleProperty } from '@shopify/restyle';

const properties = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  ms: 'marginStart',
  me: 'marginEnd',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  ps: 'paddingStart',
  pe: 'paddingEnd',
  g: 'gap',
  rg: 'rowGap',
  cg: 'columnGap',
};

export const spacing = getKeys(properties).map(property => {
  const styleProperty = properties[property] as RNStyleProperty;

  return createRestyleFunction({
    property,
    styleProperty,
    transform: ({ value }: { value: Spacing }) => (typeof value === 'number' ? value : SPACING[value]),
  });
});

export type SpacingProps = {
  [Key in keyof typeof properties]?: Spacing;
};
