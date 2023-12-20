import React from 'react';

import { BaseButton, type ButtonProps } from '../base';

const FilledButton: React.FC<ButtonProps> = ({ bg = 'primary', ...props }) => {
  return <BaseButton bg={bg} br={12} minh={60} px="md" bw={1} bc={bg} textColor="white" {...props} />;
};

export { FilledButton };
