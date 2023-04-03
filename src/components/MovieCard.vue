<template>
  <v-card>
    <!-- sunshine / docks -->
    <v-img
      class="white--text align-end"
      height="200px"
      :src="movie ? movie.thumbnail : ''"
    >
      <v-card-title>{{ movie ? movie.title : "" }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      개봉일 : {{ movie ? movie.openingDate : "" }}
    </v-card-subtitle>

    <!-- <v-card-subtitle class="pb-0"> id = {{ movie.movieId }} </v-card-subtitle> -->

    <v-card-text class="text--primary">
      장르 : {{ movie ? movie.zenre : "" }}
      <v-spacer></v-spacer>
      예매율 : {{ movie ? movie.avgTicket : "" }}%
      <v-spacer></v-spacer>
      평점 : {{ movie ? movie.avgScore : "" }}
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="buttons">
        <!-- <v-btn color="orange" text> 편집 </v-btn> -->
        <UpdatePage :updateObject="movie"></UpdatePage>
        <v-btn color="orange" text @click="deleteForm(movie.movieId)">
          삭제
        </v-btn>
      </slot>
    </v-card-actions>

    <!-- ======================= -->

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> 삭제되었습니다. </v-card-title>
        <br />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="closeD"> 확인 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import UpdatePage from "./UpdatePage.vue";
import { deleteMovie } from "@/api/index.js";
export default {
  components: {
    UpdatePage,
  },
  props: ["movie"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    async deleteForm(id) {
      try {
        console.log("id_result", id);
        await deleteMovie(id);
        this.dialog = true;
      } catch (e) {
        console.log("error", e);
      }
    },
    closeD() {
      this.dialog = false;
      this.$emit("refresh");
    },
  },
};
</script>