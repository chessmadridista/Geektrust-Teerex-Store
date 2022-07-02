<template>
  <v-container>
    <v-row>
      <v-col 
      v-for="item in items" 
      :key="item.id" 
      cols="12" 
      lg="4"
      align="center"
      class="mt-lg-16">
        <v-card 
        height="375px" 
        width="300px" 
        align="center">
          <v-img
          :src="item.imageURL"
          width="250px"
          height="250px"></v-img>
          <v-row>
            <v-col cols="8">
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-text>
                <v-row class="ml-0">
                    <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"></v-rating>
                    <!-- <v-btn
                    color="primary">Add</v-btn> -->
                </v-row>
                <v-row class="ml-1 mt-4">
                    <span>${{ item.price }}</span>
                </v-row>
              </v-card-text>
            </v-col>
            <v-col cols="2" class="mt-10">
              <v-btn
              color="primary"
              fab>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
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
  beforeCreate() {
    this.items = fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        .then((response) => response.json())
        .then((data) => {
          this.items = data;
          return true;
        })
    console.log("'Items' has been initialized.");
  },
  mounted() {
    console.log("The component is now mounted.");
  }
};
</script>
