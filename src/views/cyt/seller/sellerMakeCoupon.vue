<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <div class="flex flex-col space-y-40 2xl:space-y-[300px]">
      <div
        class="flex flex-col md:flex-row space-x-0 md:space-x-10 2xl:space-x-[200px] space-y-20 md:space-y-0"
      >
        <question-item
          v-for="(item, index) in questionItemList"
          :key="index"
          :questionItem="item"
        ></question-item>
        <div>那就快加入ITY讓我們客製化屬於您們商店專屬的優惠券!</div>
        <choose-template></choose-template>
      </div>
      <div
        class="flex flex-col md:flex-row space-x-0 md:space-x-10 2xl:space-x-[200px] space-y-20 md:space-y-0"
      >
        <input-discount></input-discount>
        <post-coupon></post-coupon>
      </div>
    </div>
    <router-link :to="{ name: '' }" class="flex justify-center w-full pt-5">
      <classic-button
        :name="'GET START'"
        class="w-2/3 lg:w-1/2 h-16 md:h-20 xl:h-24 2xl:h-[100px] rounded-md md:rounded-lg bg-[#9763AB] hover:bg-gradient-to-r hover:from-[#fccb90] hover:to-[#d57eeb] text-white"
      ></classic-button>
    </router-link>
  </div>
</template>

<script>
import questionItem from "@/vues/shows/questionItem.vue";
import chooseTemplate from "@/vues/sellerCouponIntro/chooseTemplate.vue";
import inputDiscount from "@/vues/sellerCouponIntro/inputDiscount.vue";
import postCoupon from "@/vues/sellerCouponIntro/postCoupon.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "makeCouponPage",
  components: {
    questionItem,
    chooseTemplate,
    inputDiscount,
    postCoupon,
    classicButton,
  },
  setup() {
    const questionItemList = [
      {
        content: "是不是對於優惠券的外觀設計、推播成效絞盡腦汁仍毫無頭緒呢?",
      },
    ];
    return { questionItemList };
  },
};
</script>
