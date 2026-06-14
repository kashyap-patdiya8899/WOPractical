import { useInfiniteQuery } from '@tanstack/react-query';
import { getEpisodes } from '@WOPractical/services';

/**
 * Fetches paginated episodes.
 * Uses React Query's useInfiniteQuery to support
 * infinite scrolling and automatic pagination.
 * 
 * @returns {UseInfiniteQueryResult} Infinite query result containing:
 * - paginated episodes data
 * - loading and error states
 * - fetchNextPage()
 * - hasNextPage
 * - isFetchingNextPage
 */
export const useEpisodes = () => {
  return useInfiniteQuery({
    queryKey: ['episodes'],

    queryFn: ({ pageParam = 1 }) =>
      getEpisodes(pageParam),

    initialPageParam: 1,

    getNextPageParam: lastPage => {
      if (lastPage.info.next) {
        const url = new URL(lastPage.info.next);
        return Number(url.searchParams.get('page'));
      }

      return undefined;
    },
  });
};
