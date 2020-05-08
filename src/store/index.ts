import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import defaultStore from './default';
import { DefaultStateInterface } from './default/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StoreInterface {
  // Define your own store structure, using submodules if needed
  defaultStore: DefaultStateInterface;
  // example: unknown; // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StoreInterface>({
    modules: {
      defaultStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
