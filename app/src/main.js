import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import Home from './components/Home.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false
const router = new VueRouter({
  routes: [
    { 
      name: 'Home',
      path: '/',
      component: Home
    }
  ]
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
