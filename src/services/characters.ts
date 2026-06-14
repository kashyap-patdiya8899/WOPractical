import { Character, CharactersResponse } from '@WOPractical/types';
import { api } from './axios';
import { endpoints } from './endpoints';

export const getCharacters = async (
  page: number,
  name?: string,
  status?: string,
  gender?: string,
) => {
  const params: Record<string, string | number> = { page };

  if (name) params.name = name;
  if (status) params.status = status;
  if (gender) params.gender = gender;

  const response = await api.get<CharactersResponse>(endpoints.characters.list, {
    params,
  });

  return response.data;
};


export const getCharacterDetail = async (characterId: string) => {
  const response = await api.get<Character>(endpoints.characters.detail(characterId));
  return response.data;
};
