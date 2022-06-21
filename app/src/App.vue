<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-row>
        <v-col cols="9">
          <v-text-field
            filled
            dense
            outlined
            label="Search TeeRex"
            prepend-inner-icon="mdi-magnify"
            class="mt-6"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
</style>