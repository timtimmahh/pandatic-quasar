import { MutationTree } from 'vuex';
import { DefaultStateInterface } from './state';

const mutation: MutationTree<DefaultStateInterface> = {
  setUserDetails (state: DefaultStateInterface, payload) {
    state.userDetails = payload
  }
};

export default mutation;
