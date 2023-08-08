<template>
  <v-container>
    <v-row>
      <v-col align="right">
        <v-btn color="primary" icon @click="showFilterDialog">
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col 
      v-for="item in this.$store.state.items" 
      :key="item.id" 
      cols="12"
      md="6"
      lg="4"
      class="mt-md-4"
      align="center">
        <v-card  
        class="pt-4 pb-8"
        width="300px" 
        height="390"
        >
          <v-img
          class="mx-auto"
          :src="item.imageURL"
          width="180px"
          height="180px"
           />
          <v-card-title>
            <v-icon color="primary">{{getGenderIcon(item.gender)}}</v-icon>
            {{ item.name }} 
            <v-rating
            class="ml-4"
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"></v-rating>
          </v-card-title>
          <v-card-subtitle class="text-left pl-6">
            ₹{{ item.price }}
          </v-card-subtitle>
          <v-card-actions>
            <v-container>
              <v-row v-if="isItemInCart(item.id)">
                <v-col cols="8">
                  <v-text-field 
                    v-if="isItemInCart(item.id)"
                    background-color="#f5f5ff"
                    readonly
                    dense
                    outlined
                    class="mx-auto"
                    label='Quantity'
                    type='number'
                    v-model='item.quantityInCart'
                  />  
                </v-col>
                <v-col cols="4">
                  <v-icon color='error' @click="decreaseQuantity(item.id)">mdi-minus</v-icon>
                  <v-icon class="ml-4" color='primary' @click="increaseQuantity(item.id)" :disabled="isItemOutOfStock(item.id)">mdi-plus</v-icon>
                </v-col>
              </v-row>
              <v-row v-else>
                <v-col>
                  <v-btn
                  color="primary"
                  block
                  class="mx-auto"
                  @click="addItem(item.id)"
                  >
                    <v-icon left>mdi-plus</v-icon>Add to cart
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <FilterDialog />
  </v-container>
</template>
<script>
import FilterDialog from './FilterDialog.vue';
import { mapActions } from 'vuex';

export default {
  name: "Home",
  components: {
    FilterDialog,
  },
  data: function () {
    return {
      items: [],
    }
  },
  methods: {
    ...mapActions([
      'showFilterDialog',
      'hideFilterDialog',
    ]),
    getGenderIcon(gender) {
      let icon = 'mdi-human-male';

      if (gender == 'Women') {
        icon = 'mdi-human-female';
      }

      return icon;
    },
    addItem(id) {
      this.$store.dispatch('addItem', id - 1);
    },
    isItemInCart(id) {
      return this.$store.state.items[id - 1].quantityInCart > 0;
    },
    isItemOutOfStock(id) {
      const item = this.$store.state.items[id - 1];
      
      if (item.quantityInCart >= item.quantity) {
        return true;
      } else {
        return false;
      }
    },
    increaseQuantity(id) {
      this.$store.dispatch('increaseQuantity', id - 1);
    },
    decreaseQuantity(id) {
      this.$store.dispatch('decreaseQuantity', id - 1);
    },
  },
};
</script>
