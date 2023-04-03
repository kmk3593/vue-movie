<template>
  <v-app>
    <div id="app">
      <!-- <header>
        <router-link to="/login">Log In</router-link> |
        <router-link to="/main">Movie</router-link>
      </header> -->
      <menu-tab></menu-tab>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
// import LoginPage from './components/LoginPage.vue';
import MenuTab from '@/components/MenuTab.vue'

export default {
  name: 'App',

  components: {
    // LoginPage,
    MenuTab,
  },

  data: () => ({
    //
  }),
};
</script>
