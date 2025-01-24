import { useAppConfig } from '@vben/hooks';

import { Client, cacheExchange, fetchExchange } from '@urql/vue';

const { apiURL } = useAppConfig(import.meta.env, import.meta.env.PROD);

function createRequestClient(baseURL: string) {
  return new Client({
    url: baseURL,
    fetchOptions: () => {
      const token = localStorage.getItem('authToken'); // 获取存储的 token
      console.log('createRequestClient token:', token);
      return {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      };
    },
    exchanges: [cacheExchange, fetchExchange],
  });
}

export const requestClient = createRequestClient(apiURL);
