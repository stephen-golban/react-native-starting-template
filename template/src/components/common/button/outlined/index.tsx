import React from 'react';

import { BaseButton, type ButtonProps } from '../base';

const OutlinedButton: React.FC<ButtonProps> = props => {
  return <BaseButton bg="transparent" br={12} minh={60} px="md" bw={1} bc="cadet_blue" textColor="zodiac_blue" {...props} />;
};

export { OutlinedButton };
