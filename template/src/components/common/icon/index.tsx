import React from 'react';

import { BaseButton } from '../button';
import * as ICONS from '@components/icons';
import { createStyled } from '@library/restyle';

import type { Color } from '@theme/colors';
import type { SvgProps } from 'react-native-svg';

type IconType = keyof typeof ICONS;

type IconProps = Omit<SvgProps, 'color'> &
  RestyledIcon & {
    color?: Color;
    icon: IconType;
  };

const _Icon = (icon: IconType) => createStyled(ICONS[icon]);

type RestyledIcon = React.ComponentProps<ReturnType<typeof _Icon>>;

const Icon: React.FC<IconProps> = ({ icon, onPress, ...props }) => {
  const Component = _Icon(icon);
  return (
    <BaseButton onPress={onPress} disabled={typeof onPress !== 'function'}>
      <Component {...props} />
    </BaseButton>
  );
};

export { Icon };
