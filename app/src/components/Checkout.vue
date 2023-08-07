<template>
      <v-container>
        <v-row>
        <v-col 
        v-for="item in $store.getters.getItemsInCart" 
        :key="item.id" 
        cols="12"
        md="6"
        lg="4"
        align="center"
        class="my-md-8">
          <v-card  
            class="pt-4 pb-8"
            width="300" 
            height="390"
            >
            <v-img
            class="mx-auto"
            :src="item.imageURL"
            width="180px"
            height="180px"
            />
            <v-card-title>
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
              ₹{{ item.price * item.quantityInCart }}
            </v-card-subtitle>
            <v-card-actions>
              <v-container>
                <v-row>
                  <v-col cols="8">
                    <v-text-field 
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
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <CheckoutDeleteItemConfirmation :id="id" />
    </v-container>
</template>

<script>
import CheckoutDeleteItemConfirmation from './CheckoutDeleteItemConfirmation.vue';

export default {
  name: 'Checkout',
  components: {
    CheckoutDeleteItemConfirmation,
  },
  data() {
    return {
      id: null,
    };
  },
  methods: {
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
      if (this.$store.state.items[id - 1].quantityInCart === 1) {
        this.id = id;
        this.$store.dispatch('showDeletionConfirmationModal');
      } else {
        this.$store.dispatch('decreaseQuantity', id - 1);
      }
    },
  },
}
</script>