<!-- <template lang="">
    <div class='menu1'>
        <router-link to="/main" class="link1">영화 목록</router-link> ||
        <router-link to="/manager" class="link1">영화 관리</router-link> ||
        <router-link to="/login" class="link2">로그아웃</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.menu1 {
    color: white;
    background-color: skyblue;
    font-size: 20px;
    height: 50px;
    /* text-align: center; */
    /* margin: 10px; */
    padding: 10px;
}
.link1 {
    text-align: left;
}
.link2 {
    text-align: right;
}
</style> -->
<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <!-- <v-app-bar-title>Title</v-app-bar-title> -->

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->

      <template v-slot:extension>
        <v-tabs align-with-title>
          <router-link to="/main"><v-tab>영화 목록</v-tab></router-link>
          <router-link to="/manager"><v-tab>영화 관리</v-tab></router-link>
          <v-spacer></v-spacer>
          <router-link to="/login"><v-tab>로그 아웃</v-tab></router-link>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 225px"></v-container>
    </v-sheet>
  </v-card>
</template>


<style scoped>
</style>