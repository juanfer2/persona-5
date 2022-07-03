import { useEffect, useState } from 'react';

import { Character } from '@/models/character';
import { getCharacters } from '@/services/rick-and-morty.service';

export const useHome = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const callCharacters = async () => {
    const data: Character[] | Error = await getCharacters();
    setCharacters(data as Character[]);
  };

  useEffect(() => {
    callCharacters();
  }, []);

  return { characters };
};
