import { EpisodeResponse } from '@WOPractical/types';
import { api } from './axios';
import { endpoints } from './endpoints';

export const getEpisodes = async (
  page: number,
) => {
  const response = await api.get<EpisodeResponse>(endpoints.episodes, {
    params: {
      page,
    },
  });

  return response.data;
};
