import React from 'react';

import S from '../../style';
import useModalContent from './hooks';
import { useDisableBackHandler, useStyle } from '@library/hooks';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import ContentView from './content-view';
import ContentBackdrop from './content-backdrop';
import { Keyboard, ViewProps } from 'react-native';

import type { ModalContentProps } from './type';

export const ModalContent = React.forwardRef((props: ModalContentProps, ref) => {
  const {
    style,
    children,
    customBackDrop,
    onBackdropPress,
    backdropOpacity = 0.3,
    backdropColor = 'black',
    onBackButtonPress: onBackAndroidPress,
    ...rest
  } = props;

  const styles = useStyle(S);
  const { fns, vars } = useModalContent({ backdropColor, backdropOpacity, onBackAndroidPress, ...rest });

  React.useImperativeHandle(
    ref,
    () => {
      return {
        dismiss: () => {
          fns.closeModal();
          Keyboard.dismiss();
        },
      };
    },
    [fns.closeModal],
  );

  useDisableBackHandler(true, fns.onBackButtonPress);

  React.useEffect(() => {
    fns.openModal();
  }, []);

  const modalViewProps = useAnimatedProps<CustomOmit<ViewProps, 'style'>>(() => ({
    pointerEvents: vars.reBackdropOpacity.value === backdropOpacity ? 'auto' : 'none',
  }));

  return (
    <Animated.View animatedProps={modalViewProps} style={styles.modal}>
      <ContentBackdrop vars={vars} customBackDrop={customBackDrop} onBackdropPress={onBackdropPress} />
      <ContentView fns={fns} children={children} entering={rest.entering} exiting={rest.exiting} style={style} />
    </Animated.View>
  );
});

export type ModalContent = {
  dismiss: () => void;
};
