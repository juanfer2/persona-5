import { TextField } from '@mui/material';
import React from 'react';

import { InputStyled } from './Input.styles';

interface Props {
  name: string;
  defaultValue?: string;
  type?: string;
  label?: string;
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | undefined;
  focused?: true;
  errorMessage?: string;
  control?: any;
}

function Input({ name, type, defaultValue, label, color, focused, errorMessage, control }: Props) {
  const controlRef = (control && control(name)) || {};

  return (
    <InputStyled>
      <TextField
        type={type}
        label={label}
        variant="outlined"
        defaultValue={defaultValue}
        color={color}
        focused={focused}
        name={name}
        {...controlRef}
      />

      {errorMessage && <p>{errorMessage}</p>}
    </InputStyled>
  );
}

Input.defaultProps = {
  label: '',
  defaultValue: null,
  type: 'text',
  color: 'primary',
  focused: false,
  errorMessage: null,
  control: null
};

export default Input;
