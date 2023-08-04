<template>
  <v-container>
    <v-row>
      <v-col 
      v-for="item in this.$store.state.items" 
      :key="item.id" 
      cols="12"
      md="6"
      lg="4"
      class="mt-md-4">
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
              <v-row>
                <v-col v-if="isItemInCart(item.id)">
                  <v-text-field 
                    v-if="isItemInCart(item.id)"
                    dense
                    outlined
                    width="100"
                    class="mx-auto"
                    label='Quantity'
                    type='number'
                    v-model='item.quantityInCart'
                  />  
                </v-col>
                <v-col v-else>
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
            <!-- <v-text-field 
              v-if="isItemInCart(item.id)"
              dense
              outlined
              width="100"
              class="mx-auto"
              label='Quantity'
              type='number'
              v-model='item.quantityInCart'
            /> -->
            <!-- <v-btn
            color="primary"
            width="200"
            class="mx-auto"
            @click="addItem(item.id)"
            >
              <v-icon left>mdi-plus</v-icon>Add to cart
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      items: [],
    }
  },
  methods: {
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
  },
};
</script>
