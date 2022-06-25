<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-img></v-img>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-img></v-img>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-img></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: function () {
      return {
        items: fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
              .then(response => response.json())
              .then(data => {
                  this.items = data
                  
                  return this.items;
                  }
              ),
      }
    }
  }
</script>
