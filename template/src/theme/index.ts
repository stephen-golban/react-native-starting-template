import LAYOUT from './layout';
import COLORS from './colors';
import TEXT_VARIANTS from './font';
import { SPACING, RADII, Z_INDICES } from './metrics';
import { createTheme, useTheme as useShopifyTheme } from '@shopify/restyle';

type AppTheme = typeof LIGHT;
type ThemeType = keyof typeof THEME;

const LIGHT = createTheme({
  layout: LAYOUT,
  colors: COLORS,
  spacing: SPACING,
  borderRadii: RADII,
  zIndices: Z_INDICES,
  textVariants: TEXT_VARIANTS,
});
const DARK = { ...LIGHT }; //TODO replace with the actual dark theme colors ex: { ...LIGHT, COLORS: DARK_THEME_COLORS }

const THEME = {
  dark: DARK,
  light: LIGHT,
};

const useTheme = () => {
  const theme = useShopifyTheme<AppTheme>();

  return theme;
};

export { THEME, useTheme };

export type { AppTheme, ThemeType };
