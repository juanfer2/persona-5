import styled from '@emotion/styled';

const PersonaStyled = styled.div`
  display: flex;
  gap: 1em;
  place-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;

  .image {
    img {
      transform: translatey(0px);
      animation: float 6s ease-in-out infinite;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;

    .elements {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(50px, 50px));
      gap: 1em;
    }
  }


  @keyframes float {
    0% {
      // box-shadow: 0 5px 15px 0px rgba(243, 228, 228, 0.1);
      transform: translatey(0px);
    }
    50% {
      //box-shadow: 0 25px 15px 0px rgba(243, 228, 228, 0.2);
      transform: translatey(-20px);
    }
    100% {
      // box-shadow: 0 5px 15px 0px rgba(243, 228, 228, 0.6);
      transform: translatey(0px);
    }
  }
`;

export { PersonaStyled };
