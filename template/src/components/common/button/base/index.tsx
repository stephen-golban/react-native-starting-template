import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useThrottle } from './hook';
import { createStyled } from '@library/restyle';

import { Text } from '@components/common/text';

import type { ExtendedButtonProps } from './type';
import { ActivityIndicator } from '@components/common/activity-indicator';
import { View } from '@components/common/view';

const _Button = createStyled(TouchableOpacity);

type ButtonProps = React.ComponentProps<typeof _Button> & ExtendedButtonProps;

const BaseButton = (props: ButtonProps) => {
  const {
    text,
    t18n,
    loading,
    disabled,
    children,
    textProps,
    textColor,
    throttleMs,
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    ...rest
  } = props;

  const [, handlePress, handleLongPress, handlePressIn, handlePressOut] = useThrottle({
    throttleMs,
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
  });

  const disabled_btn = React.useMemo<ButtonProps>(() => {
    if (loading || disabled) {
      return { opacity: 0.5, disabled };
    }
    return { disabled };
  }, [loading, disabled]);

  return (
    <_Button
      {...rest}
      {...disabled_btn}
      activeOpacity={1}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}>
      {loading ? (
        <View d {...(rest as any)}>
          <ActivityIndicator size="small" mr="sm" />
          {children || <Text t18n={t18n} text={text} color={textColor} variant="16-bold" {...textProps} />}
        </View>
      ) : (
        children || <Text t18n={t18n} text={text} color={textColor} variant="16-bold" {...textProps} />
      )}
    </_Button>
  );
};

export { BaseButton };
export type { ButtonProps };
