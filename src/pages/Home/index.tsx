import { Card } from '@mui/material';

import { Character } from '@/models/character';

import { HomeStyled } from './home.styles';
import { useHome } from './useHome';

/*
const Heading = styled('h1')`
  background-color: ${(props: any) => props.bg};
  color: ${(props: any) => props.fg};
`;
*/

function Home() {
  const { characters } = useHome();

  return (
    <HomeStyled>
      {characters &&
        characters.map((character: Character) => (
          <Card key={character.id}>
            <img src={character.image} alt={character.name} />
          </Card>
        ))}
    </HomeStyled>
  );
}

export default Home;
