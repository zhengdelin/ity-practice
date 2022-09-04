<template>
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
    <div
      class="flex flex-col sm:flex-row space-x-0 sm:space-x-10 2xl:space-x-20 space-y-5 sm:space-y-0"
    >
      <seller-Info-Card
        :location="'臺中市梧棲區'"
        :time="'09:00-22:00'"
        :price="160"
        :publicHoliday="'星期二、星期五'"
        :website="'https://retty.me/'"
        class="bg-[#F9F9F9]"
      ></seller-Info-Card>
      <!-- <before-login-contact-card
        :tel="'0971-635-338'"
      ></before-login-contact-card> -->
      <consumer-contact-card :tel="'0971-635-338'"></consumer-contact-card>
      <!-- <seller-contact-card></seller-contact-card>
      <organization-contact-card></organization-contact-card> -->
    </div>
    <!--Tabs-->
    <!--Below sm-->
    <select
      id="tabs"
      v-model="id"
      class="border bg-[#9763AB] border-[#76448A] text-white text-sm tracking-widest leading-loose rounded-md focus:bg-[#B983CE] focus:border-[#76448A] w-full p-3 sm:hidden"
    >
      <option
        :class="item.id == id"
        v-for="item in tabs"
        :key="item.id"
        :value="item.id"
      >
        {{ item.name }}
      </option>
    </select>
    <!--Over sm-->
    <div
      class="hidden w-full sm:h-20 md:h-24 xl:h-28 h-40 text-[#4B4B4B] text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold drop-shadow-lg sm:flex"
    >
      <div
        class="flex flex-1 items-center justify-center cursor-pointer bg-[#f9f9f9] hover:text-[#76448A]"
        v-for="item in tabs"
        :class="item.id === id ? 'classic-focus' : 'classic'"
        :key="item.id"
        @click="transfer(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <div>
      <keep-alive>
        <component :is="id"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import sellerCard from "@/vues/cards/sellerCard.vue";
import sellerInfoCard from "@/vues/cards/sellerInfoCard.vue";
import beforeLoginContactCard from "@/vues/cards/contactCard/beforeLoginContactCard.vue";
import consumerContactCard from "@/vues/cards/contactCard/consumerContactCard.vue";
import sellerContactCard from "@/vues/cards/contactCard/sellerContactCard.vue";
import organizationContactCard from "@/vues/cards/contactCard/organizationContactCard.vue";
//tabs
import postPage from "@/vues/sellerInfoPage/postPage.vue";
import menuPage from "@/vues/sellerInfoPage/menuPage.vue";
import feedbackPage from "@/vues/sellerInfoPage/feedbackPage.vue";
import couponPage from "@/vues/sellerInfoPage/couponPage.vue";
import specialAppointmentPage from "@/vues/sellerInfoPage/specialAppointmentPage.vue";
import mapPage from "@/vues/sellerInfoPage/mapPage.vue";
import { ref } from "vue";
export default {
  name: "eachSellerPage",
  components: {
    sellerCard,
    sellerInfoCard,
    beforeLoginContactCard,
    consumerContactCard,
    sellerContactCard,
    organizationContactCard,
    //tabs
    postPage,
    menuPage,
    feedbackPage,
    couponPage,
    specialAppointmentPage,
    mapPage,
  },
};
</script>
<script setup>
/**
 * tab綁定的component name
 */
const tabs = [
  { name: "店家貼文", id: "postPage" },
  { name: "菜單", id: "menuPage" },
  { name: "評價", id: "feedbackPage" },
  { name: "優惠", id: "couponPage" },
  { name: "特約學校", id: "specialAppointmentPage" },
  { name: "地圖", id: "mapPage" },
];

const id = ref("postPage");

/**
 *
 */
/**
 * @param {{name:String,id:String}} item
 */
const transfer = (item) => {
  id.value = item.id;
  console.log("transfer", item, id.value);
};

// Vue2.0
// data() {
//   return {
//     //tab綁定的component name
//     id: "postPage",
//     tabs: [
//       { name: "店家貼文", id: "postPage" },
//       { name: "菜單", id: "menuPage" },
//       { name: "評價", id: "feedbackPage" },
//       { name: "優惠", id: "couponPage" },
//       { name: "特約學校", id: "specialAppointmentPage" },
//       { name: "地圖", id: "mapPage" },
//     ],
//   };
// },
// methods: {
//   /**
//    * 切換菜單tab
//    * @param {{name:String,id:String}} item
//    */
//   transfer(item) {
//     this.id = item.id;
//     console.log("transfer", item, this.id);
//   },
// },
</script>

<style scoped>
.classic {
  background-color: #f9f9f9;
}
.classic-focus {
  background-color: #f6f6f6;
  color: #76448a;
  border-bottom: 5px solid;
  border-bottom-color: #76448a;
}
</style>
