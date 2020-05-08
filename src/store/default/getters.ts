import { GetterTree } from 'vuex';
import { StoreInterface } from '../index';
import { DefaultStateInterface } from './state';

const getters: GetterTree<DefaultStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
