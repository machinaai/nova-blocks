import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    hmr: true
  },
  locale: {
    default: 'es-ES',
    useLocalStorage: true,
  },
  routes: [{
    path: '/', component: '@/index'
  }]
});
