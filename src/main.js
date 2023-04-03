import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index'
import vuetify from './plugins/vuetify'
import axios from "axios"

// Vue.use(axios);
Vue.config.productionTip = false
// axios.defaults.baseURL = "http://localhost:8081";
// app.config.globalProperties.axios = axios;

new Vue({
  render: h => h(App),
  vuetify,
  router, 
  axios,
}).$mount('#app')


// import { createApp } from 'vue'
// import App from './App.vue'
// import axios from "axios"
// import vuetify from './plugins/vuetify'
// import { router } from './routes/index'


// createApp.config.productionTip = false
// axios.defaults.baseURL = "http://localhost:8081";
// const app = createApp(App);
// app.config.globalProperties.axios = axios;

// createApp(App).use(vuetify).use(router).use(axios).mount('#app')