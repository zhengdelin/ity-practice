<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <div class="flex flex-row justify-between space-x-5 lg:space-x-10">
      <seller-card :seller="'誰說海的味道都是鹹的'"></seller-card>
      <div
        class="w-7/12 sm:w-8/12 md:w-3/4 2xl:w-[1220px] h-40 sm:h-56 xl:h-64 2xl:h-[400px] overflow-hidden bg-no-repeat bg-cover"
      >
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
    <div class="flex flex-row justify-between space-x-5 lg:space-x-10">
      <classic-file-input
        :content="'選擇一張店家大頭貼'"
        class="w-5/12 sm:w-4/12 md:w-1/4 2xl:w-[380px] h-40 sm:h-56 xl:h-64 2xl:h-[400px] bg-white"
      ></classic-file-input>
      <classic-file-input
        :content="'選擇一張封面相片'"
        class="w-7/12 sm:w-8/12 md:w-3/4 2xl:w-[1220px] h-40 sm:h-56 xl:h-64 2xl:h-[400px] bg-[#F6DEF6] rounded-lg"
      ></classic-file-input>
    </div>
    <classic-input
      v-for="(item, index) in classicInputList"
      :key="index"
      :classicInput="item"
    >
    </classic-input>
    <classic-radio class="py-5 xl:py-10"></classic-radio>
    <div class="flex justify-center w-full">
      <accordion-item :title="'開啟點餐服務應注意事項'"></accordion-item>
    </div>
    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'sellerInfo' }" class="w-full">
          <classic-button
            :name="'返回'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <classic-button
          @click="save"
          :name="'儲存資訊'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
        ></classic-button>
      </div>
    </div>
  </div>
</template>

<script>
import sellerCard from "@/vues/cards/sellerCard.vue";
import classicFileInput from "@/vues/classic/classicFileInput.vue";
import classicInput from "@/vues/classic/classicInputType1.vue";
import identificationIcon from "@/vues/icons/identificationIcon.vue";
import locationIcon from "@/vues/icons/locationIcon.vue";
import timeIcon from "@/vues/icons/timeIcon.vue";
import priceIcon from "@/vues/icons/priceIcon.vue";
import publicHolidayIcon from "@/vues/icons/publicHolidayIcon.vue";
import websiteIcon from "@/vues/icons/websiteIcon.vue";
import phoneIcon from "@/vues/icons/phoneIcon.vue";
import accordionItem from "@/vues/shows/accordionItem.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import classicRadio from "@/vues/classic/classicRadioType1.vue";
import { useRouter } from "vue-router";

export default {
  name: "reviseSellerInfo",
  components: {
    sellerCard,
    classicFileInput,
    classicInput,
    // identificationIcon,
    // locationIcon,
    // timeIcon,
    // priceIcon,
    // publicHolidayIcon,
    // websiteIcon,
    // phoneIcon,
    accordionItem,
    classicButton,
    classicRadio,
  },
  setup() {
    const router = useRouter();
    const classicInputList = [
      {
        title: "店家名稱",
        icon: identificationIcon,
      },
      {
        title: "地址",
        icon: locationIcon,
      },
      { title: "營業時間", icon: timeIcon },
      { title: "價格區間", icon: priceIcon },
      {
        title: "公休日",
        icon: publicHolidayIcon,
      },
      { title: "網站", icon: websiteIcon },
      { title: "電話", icon: phoneIcon },
    ];

    const save = () => {
      router.push({ name: "sellerInfo" });
      // this.$router.push({ name: "sellerInfo" });
    };

    return { classicInputList, save };
  },
};
</script>

<style scoped></style>
