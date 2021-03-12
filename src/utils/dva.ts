/*
 * @Description: 
 * @Author: 乔彦辉
 * @Date: 2021-03-12 16:07:08
 * @LastEditTime: 2021-03-12 16:07:13
 * @LastEditors: 乔彦辉
 */
import { create } from 'dva-core'

let app: any;
let store: any;
let dispatch: any;

function createApp(opt) {
  app = create(opt);
  // app.use(createLoading({}));

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;
  app.use({
    onError(err) {
    },
  })

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
}