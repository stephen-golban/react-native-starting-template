import React from 'react';

import useModalContent from './hooks';

import Animated from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native';

import type { ModalProps } from '../../type';

interface IContentBackdrop
  extends Pick<ModalProps, 'customBackDrop' | 'onBackdropPress'>,
    Pick<ReturnType<typeof useModalContent>, 'vars'> {}

const ContentBackdrop: React.FC<IContentBackdrop> = ({ vars, customBackDrop, onBackdropPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onBackdropPress}>
      <Animated.View style={[vars.backDropStyle, vars.reBackdropStyle]}>{customBackDrop}</Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ContentBackdrop;
