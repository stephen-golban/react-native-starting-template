import React from 'react';

import { Portal } from '@gorhom/portal';

import { ModalProps } from './type';
import { ModalContent } from './parts';
import { useDismissKeyboard } from '@library/hooks';

const Modal = (props: ModalProps) => {
  const modalContent = React.useRef<ModalContent>(null);

  const [visible, setVisible] = React.useState<boolean>(props.isVisible);

  const closeModal = () => {
    setVisible(false);
  };

  useDismissKeyboard(visible);

  React.useEffect(() => {
    if (props.isVisible) {
      setVisible(true);
    } else {
      modalContent.current?.dismiss();
    }
  }, [props.isVisible]);

  return <Portal hostName={'AppModal'}>{visible ? <ModalContent onSetClose={closeModal} ref={modalContent} {...props} /> : null}</Portal>;
};

export { Modal };
