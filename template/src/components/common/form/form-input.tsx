import React from 'react';

import { useErrorMessageTranslation } from '@library/hooks';
import { useController, useFormContext } from 'react-hook-form';

import { HelperText } from '@components/ui';
import { TextInput, type TextInputProps } from '../text-input';

interface IFormInput<T extends Record<string, any>> extends CustomOmit<TextInputProps, 'nameTrigger'>, React.RefAttributes<any> {
  name: keyof T;
  nameTrigger?: keyof T;
}

const FormInput = <T extends Record<string, any>>({ label, name, nameTrigger, defaultValue = '', ...rest }: IFormInput<T>) => {
  const { trigger, getValues } = useFormContext<T>();

  const {
    field,
    fieldState: { error },
  } = useController({
    name: name as string,
    defaultValue,
  });

  const message = useErrorMessageTranslation(error?.message);

  return (
    <>
      <TextInput
        label={label}
        ref={field.ref}
        trigger={trigger}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        nameTrigger={nameTrigger as string}
        error={error?.message !== undefined}
        defaultValue={(getValues() as Record<string, string>)[name as string]}
        {...rest}
      />
      <HelperText visible={message !== undefined} msg={message ?? ''} type={'error'} />
    </>
  );
};

export { FormInput };
