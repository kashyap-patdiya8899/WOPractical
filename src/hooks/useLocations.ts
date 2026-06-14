import { useInfiniteQuery } from '@tanstack/react-query';
import { getLocations } from '@WOPractical/services';

/**
 * Fetches paginated locations.
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
export const useLocations = () => {
  return useInfiniteQuery({
    queryKey: ['locations'],

    queryFn: ({ pageParam = 1 }) =>
      getLocations(pageParam),

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
