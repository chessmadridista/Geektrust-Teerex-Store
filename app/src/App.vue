<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/">
        <v-img
          src="./assets/Teerex logo.png"
          width="50"
        />
      </router-link>
      <v-container class="ml-4 mt-6">
        <v-text-field
          filled
          dense
          outlined
          label="Search TeeRex"
          append-icon="mdi-magnify"
          @click:append="search"
        />
      </v-container>
          <v-btn icon>
            <v-icon>mdi-filter</v-icon>
          </v-btn>
          <router-link to="/checkout">
            <v-btn icon>
              <v-icon>mdi-cart-outline</v-icon>
            </v-btn>
          </router-link>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    search() {
      alert("YEEHAW!");
    },
  },
  beforeCreate() {
    this.$store.dispatch('initItems');
  },
};
</script>
<style>
#app {
  background: #e3e4ff;
}
</style>