// create history
let history = require('umi/lib/createHistory').default({
  basename: window.routerBase,
});
window.g_history = history;
export default history;

export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = require('umi/lib/createHistory').default({
      basename: window.routerBase,
    });
    window.g_history = history;
  }

  return history;
};

// 仅微前端场景需要，for @umijs/plugin-qiankun
export const setBase = base => {
  window.routerBase = base;
};
