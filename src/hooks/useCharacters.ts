import { getCharacterDetail, getCharacters } from '@WOPractical/services/characters';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

/**
 * Fetches paginated characters with optional filters.
 * Uses React Query's useInfiniteQuery to support
 * infinite scrolling and automatic pagination.
 * 
 * @param {string} [name=''] Character name filter.
 * @param {string} [status=''] Character status filter (alive, dead, unknown).
 * @param {string} [gender=''] Character gender filter (male, female).
 * 
 * @returns {UseInfiniteQueryResult} Infinite query result containing:
 * - paginated character data
 * - loading and error states
 * - fetchNextPage()
 * - hasNextPage
 * - isFetchingNextPage
 */
export const useCharacters = (
  name = '',
  status = '',
  gender = '',
) => {
  return useInfiniteQuery({
    queryKey: ['characters', name, status, gender],

    queryFn: ({ pageParam = 1 }) =>
      getCharacters(pageParam, name, status, gender),

    initialPageParam: 1,

    getNextPageParam: lastPage => {
      if (lastPage.info.next) {
        const url = new URL(lastPage.info.next);
        return Number(url.searchParams.get('page'));
      }

      return undefined;
    },

    retry: (failureCount, error: any) => {
      console.log("🚀 ~ useCharacters ~ failureCount:", failureCount, error)
      if (error?.response?.status === 429) {
        return failureCount < 5;
      }

      return failureCount < 3;
    },

    retryDelay: (attempt, error: any) => {
      const retryAfter =
        error?.response?.data?.retry_after ?? 30;
      console.log("🚀 ~ useCharacters ~ retryAfter:", retryAfter)

      return retryAfter * 1000 * Math.pow(2, attempt - 1);
    },
  });
};

export const useCharacterDetail = (characterId: string) => {
  return useQuery({
    queryKey: ['character', characterId],
    queryFn: () => getCharacterDetail(characterId),
  });
};