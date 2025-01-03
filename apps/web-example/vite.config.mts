import { defineConfig } from '@vben/vite-config';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          '/api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            // mock代理目标地址
            target: 'http://localhost:5320/api',
            ws: true,
          },
          '/query': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/query/, ''),
            // mock代理目标地址
            target: 'http://localhost:8081/query',
            ws: true,
          },
        },
      },
    },
  };
});
