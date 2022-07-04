import { personaData } from '@/data';
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
  const personas = personaData.slice(0, 10);

  return (
    <HomeStyled>
      {personas &&
        personas.map((persona: any) => (
          <Persona
            key={persona.name}
            name={persona.name}
            arcana={persona.arcana}
            image={persona.image}
            elems={persona.elems}
          />
        ))}
    </HomeStyled>
  );
}

export default Home;
