<template>
  <div>
    <SearchBar v-on:sendSearch="getSearch">
      <template v-slot:noPaging> &nbsp; </template>
      <template v-slot:noCalenderTo> &nbsp; </template>
      <template v-slot:noCalenderFrom> &nbsp; </template>
    </SearchBar>
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
          <MovieCard :movie="item" v-on:refresh="allListMovie">
            <template v-slot:buttons>
              <ticket-page
                :movieId="item.movieId"
                :userTicketId="item.userTicketId"
                :avgTicket="item.avgTicket"
                v-on:refresh="allListMovie"
              ></ticket-page>
              <v-spacer></v-spacer>
              <!-- {{ item.movieId }} -->
              <score-page
                :movie="item"
                v-on:refresh="allListMovie"
              ></score-page>
            </template>
          </MovieCard>
        </v-col>
      </v-row>
    </v-container>

    <!-- 더보기 -->
    <v-btn>더보기</v-btn>
  </div>
</template>
<script>
// import DialogPage from '@/components/DialogPage.vue'

import { searchListMovie } from "@/api/index.js";

import MovieCard from "./MovieCard.vue";
import ScorePage from "./ScorePage.vue";
import TicketPage from "./TicketPage.vue";
import SearchBar from "./SearchBar.vue";

export default {
  components: {
    MovieCard,
    ScorePage,
    TicketPage,
    SearchBar,
  },
  data() {
    return {
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
  methods: {
    async allListMovie(searchCondition) {
      try {
        const { data } = await searchListMovie(searchCondition);
        // this.listMovie = data;
        this.listMovie = data.content;
        // console.log(">>> 리스트 확인", data);
      } catch (e) {
        console.log("error", e);
      }
    },
    async getSearch(searchCondition) {
      try {
        // console.log()
        await this.allListMovie(searchCondition);
      } catch (e) {
        console.log("error", e);
      }
    },
  },
};
</script>
