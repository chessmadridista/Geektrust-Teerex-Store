<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-container class="ml-4 mt-6">
        <v-text-field
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
          <v-btn icon>
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
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
};
</script>
<style>
#app {
  background: #e3e4ff;
}
</style>