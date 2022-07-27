<template>
  <ity-header></ity-header>
  <div class="px-[140px] space-y-20 mb-40">
    <div class="flex flex-row space-x-10">
      <seller-card></seller-card>
      <!--Seller Picture-->
      <div class="w-[1220px] h-[400px] overflow-hidden bg-no-repeat bg-cover">
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
    <div class="flex flex-row space-x-20">
      <seller-Info-Card></seller-Info-Card>
      <contact-card></contact-card>
    </div>
    <!--Tabs-->
    <!--Below sm-->
    <!--<select
      id="tabs"
      v-model="currentIndex"
      @change="transfer(currentIndex)"
      class="border bg-[#F9F9F9] border-gray-300 text-[#4B4B4B] sm:text-sm rounded-lg focus:bg-[#F6F6F6] focus:border-[#9763AB] block w-full p-2.5 sm:hidden"
    >
      <option
        :class="currentIndex == index"
        v-for="(item, index) in tabs"
        :key="index"
        :value="index"
      >
        {{ item.name }}
      </option>
    </select>-->
    <!--Over sm-->
    <!--top-->
    <div
      class="hidden w-full h-40 text-[#4B4B4B] text-3xl font-bold drop-shadow-lg sm:flex"
    >
      <div
        class="flex flex-1 items-center justify-center cursor-pointer bg-[#F9F9F9] hover:text-[#B983CE] focus:text-[#9763AB]"
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
  </div>
  <ity-footer></ity-footer>
</template>

<script>
import ityHeader from "@/vues/shared/ityHeader.vue";
import sellerCard from "@/vues/cards/sellerCard.vue";
import sellerInfoCard from "@/vues/cards/sellerInfoCard.vue";
import contactCard from "@/vues/cards/contactCard.vue";
//tabs
import postPage from "@/vues/sellerInfo/postPage.vue";
import menuPage from "@/vues/sellerInfo/menuPage.vue";
import feedbackPage from "@/vues/sellerInfo/feedbackPage.vue";
import couponPage from "@/vues/sellerInfo/couponPage.vue";
import specialAppointmentPage from "@/vues/sellerInfo/specialAppointmentPage.vue";
import mapPage from "@/vues/sellerInfo/mapPage.vue";
import ityFooter from "@/vues/shared/ityFooter.vue";

export default {
  name: "sellerInfoPage",
  components: {
    ityHeader: ityHeader,
    sellerCard: sellerCard,
    sellerInfoCard: sellerInfoCard,
    contactCard: contactCard,
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
      index: 0,
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
  },
};
</script>

<style scoped>
.classic {
  background-color: #f9f9f9;
}
.classic-focus {
  background-color: #f9f9f9;
  color: #9763ab;
}
</style>
