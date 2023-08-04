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
            <v-btn
            color="primary"
            width="200px"
            class="mx-auto"
            >
              <v-icon left>mdi-plus</v-icon>Add to cart
            </v-btn>
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
  },
  beforeCreate() {
    // this.items = fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.items = data;
    //       return true;
    //     })
    // console.log("'Items' has been initialized.");
    this.items = this.$store.state.items;
  }
};
</script>
