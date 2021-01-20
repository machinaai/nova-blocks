import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/index'
    },
  ],
  locale: {
    default: 'es-ES',
    useLocalStorage: true,
  }
});
