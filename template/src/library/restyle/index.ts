import { createElement } from 'react';
import { useRestyle } from '@shopify/restyle';
import { transformExtendedPropsToStyles } from './util';
import { restyleFunctions, type RestyleProps } from './functions';

import type { RestyleExtendedProps } from './type';
import type { ComponentPropsWithRef, ElementType } from 'react';

type FinalProps = Omit<RestyleProps, 'alignItems' | 'flexDirection' | 'justifyContent' | 'borderRadius'> & RestyleExtendedProps;

export const createStyled = <E extends ElementType>(Component: E): React.FC<FinalProps & ComponentPropsWithRef<E>> => {
  return props => {
    const { fill, absoluteFill, fullSize, center, ...restyleProps } = props;

    const extendedStyles = transformExtendedPropsToStyles({ fill, absoluteFill, fullSize, center });

    const { style, ...rest } = useRestyle(restyleFunctions as any, restyleProps);

    const newStyle = [extendedStyles, style];
    const restyledProps = { style: newStyle, ...rest };

    const finalProps = { ...extendedStyles, ...restyledProps };

    return createElement(Component, finalProps);
  };
};
