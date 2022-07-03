import styled from '@emotion/styled';

const InputStyled = styled.div`
  & input:valid + fieldset {
    border-color: 'green';
    border-width: 2;
  }

  & input:invalid + fieldset {
    border-color: 'red';
    border-width: 2;
  }

  p {
    font-size: 12px;
    color: red;
  }
`;

export { InputStyled };
