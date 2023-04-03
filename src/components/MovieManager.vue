<template>
  <div>
    <v-alert border="left" color="indigo" dark>
      영화 관리
      <dialog-page />
    </v-alert>
    <br />

    <SearchBar v-on:sendSearch="getSearch" :pageInfo="movieInfo">
      <template #movieManager>
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
              <MovieCard :movie="item" v-on:refresh="allListMovie"></MovieCard>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </SearchBar>
  </div>
</template>
<script>
// import UpdatePage from "./UpdatePage.vue";
import DialogPage from "./DialogPage.vue";
import MovieCard from "./MovieCard.vue";
import SearchBar from "./SearchBar.vue";
import { searchListMovie } from "@/api/index.js";

export default {
  components: {
    DialogPage,
    MovieCard,
    SearchBar,
    // UpdatePage,
  },
  data() {
    return {
      listMovie: [],
      movieInfo: [],
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
    async allListMovie(searchCondition) {
      // 1번
      try {
        const { data } = await searchListMovie(searchCondition);
        this.listMovie = data.content;
        this.movieInfo = data;
        console.log(">>> 리스트 확인", data);
      } catch (e) {
        console.log("error", e);
      }
    },
    async getSearch(searchCondition) {
      try {
        // searchCondition.page = this.page - 1;
        // console.log("page 확인", this.page);
        // console.log("page condition 확인", searchCondition.page);
        await this.allListMovie(searchCondition);
      } catch (e) {
        console.log("error", e);
      }
    },
  },
  // watch: {
  //   dialogClose(value) {
  //     if (value) {
  //       this.setPrevData();
  //     }
  //   },
  // },
};
</script>
