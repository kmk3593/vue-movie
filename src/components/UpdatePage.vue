<template>
  <v-row justify="center">
    <v-dialog v-model="dialogClose" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="orange" text v-bind="attrs" v-on="on"> 편집 </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">영화 편집</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="8">
                <v-text-field
                  label="영화 검색"
                  type="text"
                  v-model="query"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <DialogMovie
                  :searchTitle="query"
                  v-on:sendMovie="getMovie"
                ></DialogMovie>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field label="영화 제목*" type="text" v-model="title">
                  {{ title }}
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <!-- <v-select :items="['액션', '판타지', '스릴러', '로맨스', '호러']" label="장르" required></v-select> -->
                <v-text-field
                  label="장르"
                  type="text"
                  v-model="zenre"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  label="영화 개봉일"
                  hint="ex) 2023-01-01T00:00:00.000000"
                  persistent-hint
                  required
                  type="text"
                  v-model="openingDate"
                  >{{ openingDate }}</v-text-field
                >
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="좌석 수"
                  type="text"
                  v-model="totalSeat"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="썸네일"
                  type="text"
                  v-model="thumbnail"
                  required
                  >{{ thumbnail }}</v-text-field
                >
              </v-col>
            </v-row>
          </v-container>
          <small>* 표시된 항목은 필수 항목입니다</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogClose = false">
            취소
          </v-btn>
          <!-- <v-btn color="blue darken-1" text @click="testO"> 취소 </v-btn> -->
          <v-btn color="blue darken-1" text @click="saveForm"> 저장 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
/* eslint-disable */
// import { createPost } from '@/api/posts';
import { updateMovie } from "@/api/index";
// import { saveMovie } from "@/api/index";
import DialogMovie from "@/components/DialogMovie.vue";

export default {
  components: {
    // LoginPage,
    DialogMovie,
  },
  props: ["updateObject"],
  data() {
    return {
      dialogClose: false,
      query: "",
      title: "",
      thumbnail: "",
      totalSeat: "",
      zenre: "",
      openingDate: "",
    };
  },
  methods: {
    async saveForm() {
      console.log("폼 제출");

      const movieData = {
        movieId: this.movieId,
        title: this.title,
        thumbnail: this.thumbnail,
        totalSeat: this.totalSeat,
        zenre: this.zenre,
        openingDate: this.openingDate,
      };
      console.log(movieData.title);
      try {
        const { data } = await updateMovie(movieData);
        // console.log(data.title);
        console.log("result", data);
        this.initForm();
        this.dialogClose = false;
        this.$router.go(0);
      } catch (e) {
        console.log("error", e);
      }
    },
    getMovie(selectedMovie) {
      console.log(selectedMovie);
      this.title = selectedMovie.title;
      this.thumbnail = selectedMovie.image;

      var date = this.createRandomDate(selectedMovie.pubDate);

      this.openingDate = this.dateFormat(date);
    },
    createRandomDate(year) {
      let dateYear = year ? year : 2023;
      return new Date(new Date(dateYear, 1, 1).getTime() + Math.random() * 364);
    },
    dateFormat(date) {
      let month = date.getMonth() + 1;
      let day = date.getDate();

      month = month >= 10 ? month : "0" + month;
      day = day >= 10 ? day : "0" + day;

      return date.getFullYear() + "-" + month + "-" + day + "T00:00:00.000000";
    },
    initForm() {
      this.query = "";
      this.title = "";
      this.thumbnail = "";
      this.totalSeat = "";
      this.zenre = "";
      this.openingDate = "";
    },

    setPrevData() {
      console.log("testObect", this.updateObject.title);

      this.movieId = this.updateObject.movieId;
      this.title = this.updateObject.title;
      this.zenre = this.updateObject.zenre;
      this.openingDate = this.updateObject.openingDate;
      this.totalSeat = this.updateObject.totalSeat;
      this.thumbnail = this.updateObject.thumbnail;
    },
  },
  watch: {
    dialogClose(value) {
      if (value) {
        this.setPrevData();
      }
    },
  },
};
</script>
