import React from 'react';

import { useTheme } from '@theme/index';

import Animated from 'react-native-reanimated';

import type { ModalContentProps, UseModalContentReturn } from './type';

interface IContentView extends Pick<UseModalContentReturn, 'fns'>, Pick<ModalContentProps, 'entering' | 'exiting' | 'style' | 'children'> {}

const ContentView: React.FC<IContentView> = ({ fns, children, entering, exiting, style }) => {
  const { layout } = useTheme();

  return (
    <Animated.View pointerEvents="box-none" style={[layout.justifyContentCenter, layout.fill, style]}>
      <Animated.View
        entering={(entering as any)?.withCallback(fns.onEndAnimatedOpen)}
        exiting={(exiting as any)?.withCallback(fns.onEndAnimatedClose)}>
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export default ContentView;
