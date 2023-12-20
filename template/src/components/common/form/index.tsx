import React from 'react';

import { FormInput } from './form-input';

import { UseFormHandleSubmit, FieldValues, FormProvider, useForm, UseFormReturn, DefaultValues } from 'react-hook-form';

interface IFormProps<T extends FieldValues> {
  defaultValues?: DefaultValues<T>;
  children: React.ReactNode | ((args: UseFormReturn<T>) => React.ReactNode);
}

const Form = <T extends object>(props: IFormProps<T>) => {
  const { children, defaultValues } = props;

  const methods = useForm<T>({ defaultValues, mode: 'all' });
  return <FormProvider<T> {...methods}>{typeof children === 'function' ? children(methods) : children}</FormProvider>;
};

export { Form, FormInput };

export type CreateFormButtonArgs<T extends FieldValues> = {
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<T>;
};
