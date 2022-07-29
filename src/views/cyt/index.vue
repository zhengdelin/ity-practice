<template>
  <ity-header></ity-header>
  <div
    class="px-5 sm:px-10 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <div class="flex flex-row justify-between space-x-5 lg:space-x-10">
      <seller-card :seller="'誰說海的味道都是鹹的'"></seller-card>
      <!--Seller Picture-->
      <div
        class="w-7/12 sm:w-3/4 2xl:w-[1220px] h-40 sm:h-56 xl:h-64 2xl:h-[400px] overflow-hidden bg-no-repeat bg-cover"
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
      <seller-Info-Card></seller-Info-Card>
      <contact-card></contact-card>
    </div>
    <!--Tabs-->
    <!--Below sm-->
    <select
      id="tabs"
      v-model="currentIndex"
      @change="transfer(currentIndex)"
      class="border bg-[#B983CE] border-[#76448A] text-white text-sm tracking-widest leading-loose rounded-md focus:bg-[#9763AB] focus:border-[#76448A] w-full p-3 sm:hidden"
    >
      <option
        :class="currentIndex == index"
        v-for="(item, index) in tabs"
        :key="index"
        :id="index"
      >
        {{ item.name }}
      </option>
    </select>
    <!--Over sm-->
    <!--top-->
    <div
      class="hidden w-full sm:h-20 md:h-24 xl:h-28 h-40 text-[#4B4B4B] text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold drop-shadow-lg sm:flex"
    >
      <div
        class="flex flex-1 items-center justify-center cursor-pointer bg-[#f9f9f9] hover:text-[#76448A]"
        :class="currentIndex === index ? 'classic-focus' : 'classic'"
        v-for="(item, index) in tabs"
        :id="index"
        :key="index"
        @click="transfer(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <!--bottom-->
    <div>
      <keep-alive>
        <component :is="id"></component>
      </keep-alive>
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
import sellerInfoCard from "@/vues/cards/sellerInfoCard.vue";
import contactCard from "@/vues/cards/contactCard.vue";
import backToTopIcon from "@/vues/icons/backToTopIcon.vue";
//tabs
import postPage from "@/vues/sellerInfoPage/postPage.vue";
import menuPage from "@/vues/sellerInfoPage/menuPage.vue";
import feedbackPage from "@/vues/sellerInfoPage/feedbackPage.vue";
import couponPage from "@/vues/sellerInfoPage/couponPage.vue";
import specialAppointmentPage from "@/vues/sellerInfoPage/specialAppointmentPage.vue";
import mapPage from "@/vues/sellerInfoPage/mapPage.vue";
import ityFooter from "@/vues/shared/ityFooter.vue";

export default {
  name: "sellerInfoPage",
  components: {
    ityHeader: ityHeader,
    sellerCard: sellerCard,
    sellerInfoCard: sellerInfoCard,
    contactCard: contactCard,
    backToTopIcon: backToTopIcon,
    //tabs
    postPage: postPage,
    menuPage: menuPage,
    feedbackPage: feedbackPage,
    couponPage: couponPage,
    specialAppointmentPage: specialAppointmentPage,
    mapPage: mapPage,
    ityFooter: ityFooter,
  },
  data() {
    return {
      currentIndex: 0,
      id: "postPage",
      tabs: [
        { name: "店家貼文", id: "postPage" },
        { name: "菜單", id: "menuPage" },
        { name: "評價", id: "feedbackPage" },
        { name: "優惠", id: "couponPage" },
        { name: "特約學校", id: "specialAppointmentPage" },
        { name: "地圖", id: "mapPage" },
      ],
    };
  },
  methods: {
    transfer(item) {
      console.log("item", this);
      this.id = item.id;
    },
    backTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.classic {
  background-color: #f9f9f9;
}
.classic-focus {
  background-color: #f9f9f9;
  color: #76448a;
}
</style>
