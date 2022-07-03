import { useCustomForm } from '@/hooks/useCustomForm';

import validationSchema from './login.schema';

interface Props {
  username?: string;
  password?: string;
}

export const useLogin = ({ username = '', password = '' }: Props) => {
  const { register, handleSubmit, errors } = useCustomForm<Props>(
    { username, password },
    validationSchema
  );

  return { register, handleSubmit, errors };
};
