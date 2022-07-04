import Persona from '@/organisms/Persona';

import { HomeStyled } from './home.styles';
// import { useHome } from './useHome';

/*
const Heading = styled('h1')`
  background-color: ${(props: any) => props.bg};
  color: ${(props: any) => props.fg};
`;
*/

function Home() {
  return (
    <HomeStyled>
      <Persona />
      <Persona />
      <Persona />
      <Persona />
      <Persona />
    </HomeStyled>
  );
}

export default Home;
