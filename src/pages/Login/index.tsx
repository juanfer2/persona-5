import { Box, Button } from '@mui/material';
import React from 'react';

import Input from '@/components/Input';

import { LoginStyled } from './Login.styles';
import { useLogin } from './useLogin';

export interface LoginI {}

function Login() {
  const { errors, handleSubmit, register } = useLogin({});
  const onSubmit = (data: any) => console.log(data);

  return (
    <LoginStyled>
      <Box boxShadow={5} className={'container-form'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name={'username'}
            label={'Username'}
            errorMessage={errors?.username?.message}
            control={register}
          />

          <Input
            name={'password'}
            type={'password'}
            errorMessage={errors?.password?.message}
            control={register}
          />

          <Button variant={'contained'} color={'primary'} type={'submit'}>
            Login
          </Button>
        </form>
      </Box>
    </LoginStyled>
  );
}

export default Login;
