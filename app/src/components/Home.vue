<template>
  <v-container>
    <v-row>
      <v-col 
      v-for="item in items" 
      :key="item.id" 
      cols="12" 
      lg="4"
      align="center">
        <v-card 
        height="300px" 
        width="300px" 
        align="center">
          <v-img
          :src="item.imageURL"
          width="250px"
          height="250px"></v-img>
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
