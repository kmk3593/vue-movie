<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on, attrs }">
        <div v-if="movie.userScoreId > 0">
          <v-btn color="black" text>평가완료</v-btn>
        </div>
        <div v-else-if="movie.userTicketId > 0">
          <v-btn color="blue" text v-bind="attrs" v-on="on"> 평가하기 </v-btn>
        </div>
        <div v-else>
          <v-btn color="black" text>평가하기</v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>평점을 선택해주세요</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 220px">
          <v-radio-group v-model="movieScore">
            <v-radio
              v-for="index in 5"
              :key="index"
              :label="`${index}점`"
              :value="index"
            ></v-radio>
          </v-radio-group>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">
            취소
          </v-btn>
          <v-btn color="blue darken-1" text @click="scoreForm"> 저장 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { saveScore } from "@/api/index";

export default {
  // name: "Star",
  data() {
    return {
      dialogm1: "",
      dialog: false,
      movieScore: 0,
    };
  },
  props: ["movie"],
  methods: {
    async scoreForm() {
      try {
        console.log(this.movie.movieId);
        await saveScore(this.movie.movieId, this.movieScore);
        this.dialog = false;
        this.$emit("refresh");
      } catch (e) {
        console.log("error", e);
      }
    },
  },
};
</script>