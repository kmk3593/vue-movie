<template>
  <div>
    <v-alert border="left" color="indigo" dark> 영화 예매율 순위 </v-alert>

    <v-container fluid>
      <v-row>
        <v-col
          v-for="(item, index) in listMovie"
          :key="index"
          cols="auto"
          sm="6"
          md="6"
          lg="4"
          xl="3"
        >
          <MovieCard :movie="item"></MovieCard>
        </v-col>
      </v-row>
    </v-container>

    <br /><br />
    <v-alert border="left" color="indigo" dark> 영화 목록 </v-alert>
    <br />

    <MovieList></MovieList>
    <br /><br /><br />
  </div>
</template>
<script>
// import MovieList from "./MovieList.vue";
import MovieCard from "./MovieCard.vue";
import MovieList from "./MovieList.vue";
import { searchListMovie } from "@/api/index.js";
// import MovieList from './MovieList.vue';
export default {
  components: {
    MovieCard,
    MovieList,
  },
  data() {
    return {
      page: 1,
      listMovie: [],
      id: "",
      title: "",
      thumbnail: "",
      totalSeat: "",
      zenre: "",
      openingDate: "",
      dialog: false,
    };
  },
  // computed: {
  //   value: {
  //     get() {
  //       // return
  //     }
  //   }
  // },
  methods: {
    async ListMovies() {
      let searchCondition = {
        sort: "AVG_TICKET",
        size: 3,
      };
      try {
        const { data } = await searchListMovie(searchCondition);
        this.listMovie = data.content;
        console.log("top3", this.listMovie);
      } catch (e) {
        console.log("error", e);
      }
    },
  },
  // mounted() {
  //   this.ListMovies();
  // },
};
</script>
<style lang="">
</style>


    <!-- 영화 리스트  -->
    <!-- <br /><br /><br />
    <v-container fluid>
      <v-row>
        <v-col v-for="i in 8" :key="i" cols="12" sm="6" md="4" lg="3">
          <movie-card />
        </v-col>
      </v-row>
    </v-container>
    <br /><br /><br /> -->