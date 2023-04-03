<template>
  <div>
    <!-- <h1>{{  connectDate }} dd</h1>
        <h1>{{  apiDate }} ee</h1> -->
    <v-container>
      <v-card style="width: 40%" height="200">
        <v-toolbar color="deep-purple lighten-1">
          <v-icon color="blue lighten-5">fas fa-lock</v-icon>
          &ensp;
          <v-toolbar-title>로그인</v-toolbar-title>

          <v-spacer></v-spacer>
          <router-link to="/main">
            <v-btn>로그인</v-btn>
          </router-link>
        </v-toolbar>
        <br />
        <form @submit.prevent="submitForm">
          <v-text-field
            label="ID를 입력해주세요"
            hide-details="auto"
          ></v-text-field>

          <!-- <input id="username" type="text" v-model="username" /> -->
          <!-- <v-btn type="submit">로그인</v-btn> -->
          <!-- <p>{{ logMessage }}</p> -->
        </form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// import { loginCheck } from '@/api/index';
// import { response } from 'express';

export default {
  data() {
    return {
      // form values
      username: "",
      password: "",
      // log
      logMessage: "",
      connectDate: "",
      apiDate: "",
    };
  },
  methods: {
    // async submitForm() {
    //     console.log('폼 제출');
    //     const userData = {
    //         username: this.username,
    //         password: this.password,
    //         nickname: this.nickname,
    //     }
    //     const { data } = await loginCheck(userData);
    //     console.log(data.username);
    //     this.logMessage = `${data.username}님이 로그인했습니다`;
    //     this.initForm();
    // },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>
