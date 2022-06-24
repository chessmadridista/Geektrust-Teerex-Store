import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false
const router = new VueRouter({
  routes: [
    { 
      name: 'Hello World',
      path: '/', 
      component: HelloWorld
    }
  ]
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
