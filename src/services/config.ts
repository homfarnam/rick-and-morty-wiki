import { QueryClientConfig } from 'react-query';

/**
 *  @description - The default cache expiration time in milliseconds
 */
const queryConfig: QueryClientConfig = {
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
};

export { queryConfig };
