<template lang="">
    <div>
    <v-row
      justify="center">
        <v-btn
            @click="openDialog"
        >
            검색
        </v-btn>

      <v-dialog
        v-model="dialogOpen"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            영화 선택
          </v-card-title>
          <v-card-text>
    <p>{{ selectedMovie }}</p>
        <v-img
      class="white--text align-end"
      height="200px"
      :src="selectedMovie ? selectedMovie.image : ''"
    ></v-img>
            <v-select
              v-model="selectedMovie" 
              :items="selectMovie"
              item-text="title"
              label="영화를 선택해주세요"
              return-object
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialogOpen = false"
            >
              취소
            </v-btn>

            <v-btn
              color="primary"
              text
              @click="sendMovie"
            > 확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    </div>
</template>
<script>
import { searchApiMovie } from "@/api/index";
export default {
  data() {
    return {
      dialogOpen: false,
      notifications: false,
      sound: true,
      widgets: false,
      selectMovie: [],
      selectedMovie: "",
    };
  },
  props: ["searchTitle"],
  methods: {
    openDialog() {
      this.dialogOpen = true;
      this.searchForm();
    },
    async searchForm() {
      try {
        const { data } = await searchApiMovie(this.searchTitle);
        this.selectMovie = data.items;
      } catch (e) {
        console.log("error", e);
      }
    },
    sendMovie() {
      this.$emit("sendMovie", this.selectedMovie);
      this.dialogOpen = false;
    },
  },
};
</script>