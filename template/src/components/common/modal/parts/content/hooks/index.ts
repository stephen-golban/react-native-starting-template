import { useMemo } from 'react';
import { useTheme } from '@theme/index';
import { execFunc } from '@library/method';
import { sharedTiming } from '@library/animated';
import { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import type { UseModalContentProps } from '../type';
import type { StyleProp, ViewStyle } from 'react-native';

export default function useModalContent(props: UseModalContentProps) {
  const {
    exiting,
    entering,
    onSetClose,
    onModalHide,
    onModalShow,
    backdropColor,
    onModalWillHide,
    onModalWillShow,
    backdropOpacity,
    onBackAndroidPress,
  } = props;

  const { layout } = useTheme();
  const reBackdropOpacity = useSharedValue(0);

  const backDropStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return [layout.absoluteFill, { ...layout.fullSize, backgroundColor: backdropColor }];
  }, [backdropColor]);

  const reBackdropStyle = useAnimatedStyle(() => {
    return { opacity: reBackdropOpacity.value };
  }, []);

  function openEnd() {
    execFunc(onModalShow);
  }

  function closeEnd() {
    execFunc(onSetClose);

    execFunc(onModalHide);
  }

  function onEndAnimatedClose(isFinished?: boolean) {
    'worklet';
    if (isFinished) {
      runOnJS(closeEnd)();
    }
  }

  function onEndAnimatedOpen(isFinished?: boolean) {
    'worklet';

    if (isFinished) {
      runOnJS(openEnd)();
    }
  }

  function openModal() {
    execFunc(onModalWillShow);

    reBackdropOpacity.value = sharedTiming(backdropOpacity, undefined, isFinished => {
      'worklet';
      if (isFinished) {
        if (!entering) {
          onEndAnimatedOpen(isFinished);
        }
      }
    });
  }

  function closeModal() {
    execFunc(onModalWillHide);

    if (exiting) {
      execFunc(onSetClose);
    }

    reBackdropOpacity.value = sharedTiming(0, { duration: exiting ? 300 : 0 }, isFinished => {
      'worklet';
      if (isFinished) {
        if (!exiting) {
          onEndAnimatedClose(isFinished);
        }
      }
    });
  }

  function onBackButtonPress() {
    execFunc(onBackAndroidPress);

    return true;
  }

  return {
    fns: { closeModal, onBackButtonPress, openModal, onEndAnimatedOpen, onEndAnimatedClose },
    vars: { reBackdropOpacity, reBackdropStyle, backDropStyle },
  };
}
