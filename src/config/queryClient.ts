import { QueryClient } from '@tanstack/react-query';

import type { QueryClientConfig } from '@tanstack/react-query';

const options: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 10000,
      gcTime: 1000 * 60 * 5,
    },
  },
};

const queryClient = new QueryClient(options);

export default queryClient;
