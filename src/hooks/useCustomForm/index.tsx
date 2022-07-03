import { yupResolver } from '@hookform/resolvers/yup';
import { DeepPartial, UnpackNestedValue, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

export function useCustomForm<T>(
  defaultValues: UnpackNestedValue<DeepPartial<T>>,
  validationSchema: AnyObjectSchema
) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined
  });

  return { register, handleSubmit, errors };
}
