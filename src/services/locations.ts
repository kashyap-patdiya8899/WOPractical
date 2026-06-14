import { LocationResponse } from '@WOPractical/types';
import { api } from './axios';
import { endpoints } from './endpoints';

export const getLocations = async (
  page: number,
) => {
  const response = await api.get<LocationResponse>(endpoints.locations, {
    params: {
      page,
    },
  });

  return response.data;
};
