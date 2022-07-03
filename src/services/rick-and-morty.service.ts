import axios, { AxiosResponse } from 'axios';

import { AxiosInterceptor } from '@/interceptors/axios.interceptors';
import { Character } from '@/models/character';

AxiosInterceptor();

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (): Promise<Character[] | Error> => {
  const response: AxiosResponse = await axios.get(`${BASE_URL}/character`);

  return response.data.results;
};
