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
    <div class="w-full h-40 bg-black"></div>
    <!--Tabs-->
    <!--Below sm-->
    <select
      id="tabs"
      v-model="currentIndex"
      @change="transfer(currentIndex)"
      class="border bg-[#F2F2F2] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:hidden"
    >
      <option
        :class="currentIndex == index"
        v-for="(item, index) in tabs"
        :key="index"
        :value="index"
      >
        {{ item.name }}
      </option>
    </select>
    <!--Over sm-->
    <div
      class="hidden w-full h-40 text-[#4B4B4B] text-3xl font-bold drop-shadow-lg sm:flex"
    >
      <div
        class="flex flex-1 items-center justify-center cursor-pointer bg-[#F9F9F9] hover:text-[#B983CE] focus:text-[#9763AB]"
        :class="currentIndex === index ? 'classic-focus' : 'classic'"
        v-for="(item, index) in tabs"
        :tabindex="index"
        :key="index"
        @click="transfer(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div><seller-post></seller-post></div>
    <div><menu-item></menu-item></div>
    <div><feedback-card></feedback-card></div>
    <div class="flex flex-row space-x-10">
      <coupon-Type3></coupon-Type3>
      <coupon-Type4></coupon-Type4>
    </div>
  </div>
  <ity-footer></ity-footer>
</template>

<script>
import ityHeader from "@/vues/shared/ityHeader.vue";
import sellerCard from "@/vues/cards/sellerCard.vue";
import sellerInfoCard from "@/vues/cards/sellerInfoCard.vue";
import contactCard from "@/vues/cards/contactCard.vue";
import sellerPost from "@/vues/shows/sellerPost.vue";
import ityFooter from "@/vues/shared/ityFooter.vue";
//暫放
import menuItem from "@/vues/shows/menuItem.vue";
import feedbackCard from "@/vues/cards/feedbackCard.vue";
import couponType3 from "@/vues/shows/couponType3.vue";
import couponType4 from "@/vues/shows/couponType4.vue";

export default {
  name: "sellerInfoPage",
  components: {
    ityHeader: ityHeader,
    sellerCard: sellerCard,
    sellerInfoCard: sellerInfoCard,
    contactCard: contactCard,
    sellerPost: sellerPost,
    ityFooter: ityFooter,
    //暫放
    menuItem: menuItem,
    feedbackCard: feedbackCard,
    couponType3: couponType3,
    couponType4: couponType4,
  },
  data: function () {
    return {
      tabs: [
        { name: "店家貼文", id: "post" },
        { name: "菜單", id: "menu" },
        { name: "評價", id: "feedback" },
        { name: "優惠", id: "coupon" },
        { name: "特約學校", id: "specialAppointment" },
        { name: "地圖", id: "map" },
      ],
    };
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
