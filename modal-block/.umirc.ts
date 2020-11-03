import { defineConfig } from 'umi';

const defineConfig = {
  nodeModulesTransform: { type: 'none' },
  routes: [{ path: '/', component: '@/index' }],
  locale: { default: 'es-ES', useLocalStorage: true },
};
export default defineConfig
