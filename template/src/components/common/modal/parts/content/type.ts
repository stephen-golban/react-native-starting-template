import { ModalProps } from '../../type';
import useModalContent from './hooks';

type ModalContentProps = CustomOmit<ModalProps, 'isVisible'> & { onSetClose: () => void };

type UseModalContentProps = Omit<
  ModalContentProps,
  'children' | 'customBackDrop' | 'style' | 'onBackButtonPress' | 'onBackdropPress' | 'backdropOpacity'
> & {
  onBackAndroidPress?: () => void;
  backdropOpacity: number;
};

type UseModalContentReturn = ReturnType<typeof useModalContent>;

export type { ModalContentProps, UseModalContentProps, UseModalContentReturn };
