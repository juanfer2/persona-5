import styled from '@emotion/styled';

const LoginStyled = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  .container-form {
    padding: 20px;
    border-radius: 5px;

    form {
      display: flex;
      flex-direction: column;
      gap: 1em;
      align-items: center;
      justify-content: center;

      button {
        width: 100%;
      }
    }
  }
`;

export { LoginStyled };
