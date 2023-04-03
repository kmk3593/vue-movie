<template>
  <v-row justify="center">
    <div v-if="userTicketId > 0">
      <v-btn color="black" text> 예매완료 </v-btn>
    </div>
    <div v-else>
      <v-btn color="blue" text @click.stop="dialog = true"> 예매하기 </v-btn>
    </div>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> 예매하시겠습니까? </v-card-title>
        <br />
        <!-- <v-card-text>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </v-card-text> -->

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            아니오
          </v-btn>

          <v-btn color="green darken-1" text @click="getTicket(movieId)">
            네
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { saveTicket } from "@/api/index.js";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ["movieId", "userTicketId", "avgTicket"],
  methods: {
    async getTicket(id) {
      try {
        await saveTicket(id);
        console.log("get Ticket", id);
        this.dialog = false;
        this.$emit("refresh");
      } catch (e) {
        console.log("error", e);
      }
    },
  },
};
</script>