<template lang="">
    <div>
        
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="2">
          <v-select
            v-model="selection"
            :items="items"
            label="정렬기준"
            item-text="state"
            item-value="abbr"
            required
          ></v-select>
        </v-col> 
        <!-- 2 -->
        <v-col class="d-flex" cols="12" sm="5">
          <v-text-field
            class="mx-4"
            hide-details
            label="Search"
            v-model="title"
          ></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="12" sm="1">
          <v-btn @click="searchForm"> 검색 </v-btn>
        </v-col>

        <v-col class="d-flex" cols="12" sm="2">
            <slot name="noCalenderTo">
              <v-btn @click="toCalender=true">
                개봉일
              </v-btn>
              : {{ toPicker }}
            </slot>
          </v-col>
          <v-col class="d-flex" cols="12" sm="2">
            <slot name="noCalenderFrom">
              <v-btn @click="fromCalender=true">
                개봉일 
              </v-btn>
              : {{ fromPicker }}
            </slot>
          </v-col>

      <v-chip-group 
        @change="searchForm"
        v-model="chipSelect" 
        active-class="deep-purple--text text--accent-4"
        mandatory
      >
        <v-chip       
          v-for="items in tags"
          :key="items.frontOption"
          :value="items.backOption"
        >
          {{ items.frontOption }}
        </v-chip>
      </v-chip-group>

      </v-row>
    </v-container>

     <!-- 달력 다이얼로그 -->
    <v-dialog v-model="toCalender" max-width="350">
      <v-card>
        <v-card-title class="text-h5"> 날짜를 선택해주세요</v-card-title>
        <br />
          <v-card-text>
            <template>
              <v-row justify="center">
                <v-date-picker v-model="toPicker"></v-date-picker>
              </v-row>
            </template>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="toCalender=false"> 확인 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
    <v-dialog v-model="fromCalender" max-width="350">
      <v-card>
        <v-card-title class="text-h5"> 날짜를 선택해주세요</v-card-title>
        <br />
        <v-card-text>
          <template>
  <v-row justify="center">
    <v-date-picker v-model="fromPicker"></v-date-picker>
  </v-row>
</template>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="fromCalender=false"> 확인 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Movie Manager 컴포넌트 Slot -->
      <slot name="movieManager" />
  
    <!-- Movie List 컴포넌트 Slot -->
      <slot name="movieList" />

    <!-- 페이징 -->
    <!-- :length="pageInfo.totalPages ? pageInfo.totalPages : 5" -->
    <slot name="noPaging">
      <v-pagination
      v-model="page"
      circle
      :length="pageInfo.totalPages"
        @input="searchForm"
      ></v-pagination>
    </slot>

      
    </div>
</template>
<script>
export default {
  data() {
    return {
      page: 0,
      title: "",
      selection: { state: "", abbr: "" },
      chipSelect: { frontOption: "", backOption: "" },
      date: "",
      toCalender: false,
      fromCalender: false,
      tags: [
        { frontOption: "전체", backOption: "ALL" },
        { frontOption: "상영", backOption: "BEFORE" },
        { frontOption: "상영예정", backOption: "AFTER" },
      ],
      items: [
        { state: "개봉일순", abbr: "OPENING_DATE" },
        { state: "예매율순", abbr: "AVG_TICKET" },
        { state: "평가순", abbr: "AVG_SCORE" },
      ],
      toPicker: "",
      fromPicker: "",
      // toPicker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
    };
  },
  props: ["pageInfo"],
  methods: {
    async searchForm() {
      let searchCondition = {
        title: this.title,
        sort: this.selection,
        openSet: this.chipSelect,
        openGoe: this.toPicker,
        openLoe: this.fromPicker,
        size: 6,
        page: this.page - 1,
      };

      if (this.selection.abbr != "") {
        searchCondition = {
          title: this.title,
          sort: this.selection,
          openSet: this.chipSelect,
          openGoe: this.toPicker,
          openLoe: this.fromPicker,
          size: 6,
          page: this.page - 1,
        };
      } else {
        searchCondition = {
          title: this.title,
          openSet: this.chipSelect,
          openGoe: this.toPicker,
          openLoe: this.fromPicker,
          size: 6,
          page: this.page - 1,
        };
      }
      // console.log(">>>pageInfo 확인", this.pageInfo);
      // console.log(">>>pageInfo page수 확인", this.pageInfo.totalPages);

      try {
        this.$emit("sendSearch", searchCondition);
      } catch (e) {
        console.log("error", e);
      }
    },
  },
};
</script>
