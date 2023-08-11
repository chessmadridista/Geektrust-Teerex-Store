import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    filters: [
      {
        id: 0,
        label: 'Colour',
        apiKey: 'color',
        availableFilters: [
          'Red',
          'Blue',
          'Green',
        ],
        appliedFilters: [],
      },
      {
        id: 1,
        label: 'Gender',
        apiKey: 'gender',
        availableFilters: [
          'Men',
          'Women',
        ],
        appliedFilters: [],
      },
      {
        id: 2,
        label: 'Price',
        apiKey: 'price',
        availableFilters: [
          '< ₹250',
          '₹250 - ₹450',
          '> ₹450',
        ],
        appliedFilters: [],
      },
      {
        id: 3,
        label: 'Type',
        apiKey: 'type',
        availableFilters: [
          'Polo',
          'Hoodie',
          'Basic',
        ],
        appliedFilters: [],
      },
    ],
    showDeletionConfirmationModal: false,
    showFilterDialog: false,
  },
  getters: {
    getFilteredItems(state) {
      let filteredItems = state.items;

      for (let filter of state.filters) {
        if (filter.appliedFilters.length > 0) {
          filteredItems = filteredItems.filter((item) => {
            return filter.appliedFilters.includes(item[filter.apiKey]);
          });
        }
      }

      return filteredItems;
    },
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
    SHOW_FILTER_DIALOG(state) {
      state.showFilterDialog = true;
    },
    HIDE_FILTER_DIALOG(state) {
      state.showFilterDialog = false;
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
    showFilterDialog(context) {
      context.commit('SHOW_FILTER_DIALOG');
    },
    hideFilterDialog(context) {
      context.commit('HIDE_FILTER_DIALOG');
    },
  },
  modules: {
  }
})
