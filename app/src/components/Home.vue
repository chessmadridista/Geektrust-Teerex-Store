<template>
  <v-container>
    <v-row>
      <v-col 
      v-for="item in this.$store.state.items" 
      :key="item.id" 
      cols="12"
      md="6"
      lg="4"
      align="center"
      class="my-md-8">
        <v-card  
        class="pt-4"
        width="300px" 
        align="center">
          <v-img
          :src="item.imageURL"
          width="180px"
           />
          <v-card-title><v-icon color="primary">{{getGenderIcon(item.gender)}}</v-icon>{{ item.name }}</v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="5">
                      <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"></v-rating>
                      <span>${{ item.price }}</span>
                    </v-col>
                    <v-col cols="7">
                      <v-btn
                      color="primary"
                      fab>
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
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
