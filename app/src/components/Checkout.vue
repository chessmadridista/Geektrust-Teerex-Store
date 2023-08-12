<template>
      <v-container>
        <v-row v-if="$store.getters.getItemsInCart.length === 0">
          <v-col align='center'>
            <v-card class="text-center pa-6">
              <v-card-title class="justify-center grey--text text--darken-1">Oops!</v-card-title>
              <v-icon color="blue" size="100">mdi-cart</v-icon>
              <v-card-text>
                There are no items in the cart.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
        <v-row v-if="$store.getters.getItemsInCart.length">
          <v-col>
            <v-card>
              <v-card-title class="justify-center blue--text text--darken-3">Your bill</v-card-title>
              <v-card-text>
                <v-data-table
                :headers="headers"
                :items="$store.getters.getItemsInCart"
                >
                  <template
                    v-slot:[`item.price`]="{ item }"
                  >
                    ₹{{ item.price }}
                  </template>
                  <template
                    v-slot:[`item.totalPrice`]="{ item }"
                  >
                    ₹{{ item.quantityInCart * item.price }}
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-if="$store.getters.getItemsInCart.length">
          <v-col>
            <v-btn color="primary" block>Place order</v-btn>
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
      headers: [
        {
          text: 'S.No.',
          value: 'id',
        },
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Quantity',
          value: 'quantityInCart',
        },
        {
          text: 'M.R.P.',
          value: 'price',
        },
        {
          text: 'Total price',
          value: 'totalPrice',
        },
      ],
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