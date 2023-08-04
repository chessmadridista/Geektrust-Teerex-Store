import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
  },
  getters: {
  },
  mutations: {
    INIT_ITEMS(state, items) {
      state.items = items;
    },
  },
  actions: {
    async initItems(context) {
      let response = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
      let items = await response.json();
      items = items.map((item) => {
        item.quantityInCart = 0;
        return item;
      });
      context.commit('INIT_ITEMS', items);
      console.log("'Items' has been initialized.");
    },
  },
  modules: {
  }
})
