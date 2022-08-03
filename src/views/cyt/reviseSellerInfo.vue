<template>
  <ity-header></ity-header>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <div class="flex flex-row justify-between space-x-5 lg:space-x-10">
      <seller-card :seller="'誰說海的味道都是鹹的'"></seller-card>
      <!--Seller Picture-->
      <div
        class="w-7/12 sm:w-8/12 md:w-3/4 2xl:w-[1220px] h-40 sm:h-56 xl:h-64 2xl:h-[400px] overflow-hidden bg-no-repeat bg-cover"
      >
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
    <classic-input
      v-for="(item, index) in classicInputList"
      :key="index"
      :classicInput="item"
    >
    </classic-input>
    <classic-radio></classic-radio>
    <accordion-item :title="'開啟點餐服務應注意事項'"></accordion-item>
    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <classic-button
          :name="'返回'"
          @click="redirectToSellerInfo()"
          class="w-full h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
        ></classic-button>
        <classic-button
          :name="'儲存資訊'"
          class="w-full h-[100px] rounded-md bg-[#76448A] text-white"
        ></classic-button>
      </div>
    </div>
    <div class="relative" @click="backTop()">
      <div
        class="fixed flex justify-center items-center right-5 bottom-10 z-50 p-5 w-14 sm:w-16 lg:w-20 2xl:w-[100px] h-14 sm:h-16 lg:h-20 2xl:h-[100px] bg-[#B2415C] cursor-pointer"
      >
        <!--p-2 sm:p-4 bottom-4 sm:bottom-6 right-4 sm:right-6 h-12 w-12 sm:h-20 sm:w-20-->
        <back-To-Top-Icon></back-To-Top-Icon>
      </div>
    </div>
  </div>
  <ity-footer></ity-footer>
</template>

<script>
import ityHeader from "@/vues/shared/ityHeader.vue";
import sellerCard from "@/vues/cards/sellerCard.vue";
import classicInput from "@/vues/classic/classicInput.vue";
import identificationIcon from "@/vues/icons/identificationIcon.vue";
import locationIcon from "@/vues/icons/locationIcon.vue";
import timeIcon from "@/vues/icons/timeIcon.vue";
import priceIcon from "@/vues/icons/priceIcon.vue";
import publicHolidayIcon from "@/vues/icons/publicHolidayIcon.vue";
import websiteIcon from "@/vues/icons/websiteIcon.vue";
import phoneIcon from "@/vues/icons/phoneIcon.vue";
import accordionItem from "@/vues/shows/accordionItem.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import classicRadio from "@/vues/classic/classicRadio.vue";
import backToTopIcon from "@/vues/icons/backToTopIcon.vue";
import ityFooter from "@/vues/shared/ityFooter.vue";

export default {
  name: "eachSellerInfo",
  components: {
    ityHeader: ityHeader,
    sellerCard: sellerCard,
    classicInput: classicInput,
    // eslint-disable-next-line vue/no-unused-components
    identificationIcon: identificationIcon,
    // eslint-disable-next-line vue/no-unused-components
    locationIcon: locationIcon,
    // eslint-disable-next-line vue/no-unused-components
    timeIcon: timeIcon,
    // eslint-disable-next-line vue/no-unused-components
    priceIcon: priceIcon,
    // eslint-disable-next-line vue/no-unused-components
    publicHolidayIcon: publicHolidayIcon,
    // eslint-disable-next-line vue/no-unused-components
    websiteIcon: websiteIcon,
    // eslint-disable-next-line vue/no-unused-components
    phoneIcon: phoneIcon,
    accordionItem: accordionItem,
    classicButton: classicButton,
    classicRadio: classicRadio,
    backToTopIcon: backToTopIcon,
    ityFooter: ityFooter,
  },
  data() {
    return {
      classicInputList: [
        {
          title: "店家名稱",
          icon: identificationIcon,
        }, //content: "誰說海的味道都是鹹的",
        {
          title: "地址",
          icon: locationIcon,
        }, //content: "R東西線 ／ 新福島駅 徒歩4分",
        { title: "營業時間", icon: timeIcon }, // content: "09:00 - 20:00"
        { title: "價格區間", icon: priceIcon }, //content: "100 - 200"
        {
          title: "公休日",
          icon: publicHolidayIcon,
        }, //content: "公休日 : 星期二、星期五"
        { title: "網站", icon: websiteIcon }, //content: "https://retty.me/"
        { title: "電話", icon: phoneIcon }, //content: "0971-635-338"
      ],
    };
  },
  methods: {
    redirectToSellerInfo() {
      window.location = this.baseUrl() + "/cyt/seller-info";
    },
    baseUrl() {
      return window.location.origin;
    },
    backTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped></style>
