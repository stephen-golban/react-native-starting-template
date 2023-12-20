import { AppTheme } from '@theme/index';
import { StyleSheet } from 'react-native';

export default ({ colors, layout }: AppTheme) => {
  return StyleSheet.create({
    modal: {
      zIndex: 2,
      ...layout.absoluteFill,
      backgroundColor: colors.transparent,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
  });
};
