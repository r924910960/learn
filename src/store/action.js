/**
 * Created by Lanny on 2017/8/16.
 */
export default {
  addNum({commit, state}, id){
    commit('REMBER_ANSWER', id);
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1);
    }
  },

  initializeData({commit}){
    commit('INITIALIZE_DATA');
  }
}
