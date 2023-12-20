import { AnimatedTransform } from 'react-native-reanimated';

/**
 * Keep current position when changing properties AnimatedTransform.
 */
export const sharedTransformOrigin = ({ x, y }: { x: number; y: number }, ...transformations: any): AnimatedTransform => {
  'worklet';

  return [{ translateX: x }, { translateY: y }, ...transformations, { translateX: x * -1 }, { translateY: y * -1 }];
};
