import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    showDeletionConfirmationModal: false,
  },
  getters: {
    getItemsInCart(state) {
      return state.items.filter((item) => {
        return item.quantityInCart > 0;
      });
    },
  },
  mutations: {
    INIT_ITEMS(state, items) {
      state.items = items;
    },
    ADD_ITEM(state, id) {
      state.items[id].quantityInCart = 1;
    },
    INCREASE_QUANTITY(state, id) {
      state.items[id].quantityInCart += 1;
    },
    DECREASE_QUANTITY(state, id) {
      state.items[id].quantityInCart -= 1;
    },
    SHOW_DELETION_CONFIRMATION_MODAL(state) {
      state.showDeletionConfirmationModal = true;
    },
    HIDE_DELETION_CONFIRMATION_MODAL(state) {
      state.showDeletionConfirmationModal = false;
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
    addItem(context, id) {
      context.commit('ADD_ITEM', id);
    },
    increaseQuantity(context, id) {
      context.commit('INCREASE_QUANTITY', id);
    },
    decreaseQuantity(context, id) {
      context.commit('DECREASE_QUANTITY', id);
    },
    showDeletionConfirmationModal(context) {
      context.commit('SHOW_DELETION_CONFIRMATION_MODAL');
    },
    hideDeletionConfirmationModal(context) {
      context.commit('HIDE_DELETION_CONFIRMATION_MODAL');
    },
  },
  modules: {
  }
})
