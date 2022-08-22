<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 md:space-y-[60px] xl:space-y-[100px] mb-20 2xl:mb-40"
  >
    <div
      class="flex flex-col space-y-40 2xl:space-y-[200px] md:mt-10 2xl:mt-20"
    >
      <div
        class="flex flex-col md:flex-row space-x-0 md:space-x-10 2xl:space-x-[200px] space-y-20 md:space-y-0"
      >
        <div
          class="flex flex-col items-center lg:items-start 2xl:items-center md:justify-center space-y-10 xl:space-y-20 md:w-1/2"
        >
          <question-item
            v-for="(item, index) in questionItemList"
            :key="index"
            :questionItem="item"
            class="w-full md:w-80 lg:w-[400px] xl:w-[480px]"
          ></question-item>
          <div
            class="lg:text-left 2xl:text-center text-base sm:text-lg lg:text-2xl xl:text-3xl lg:font-medium xl:font-semibold tracking-wider lg:leading-10 xl:leading-[60px]"
          >
            那就快加入ITY<br />讓我們客製化屬於您們商店專屬的優惠券!
          </div>
        </div>
        <choose-template></choose-template>
      </div>
      <div
        class="flex flex-col md:flex-row space-x-0 md:space-x-10 2xl:space-x-[200px] space-y-40 md:space-y-0"
      >
        <input-discount></input-discount>
        <post-coupon></post-coupon>
      </div>
    </div>
    <router-link
      :to="{ name: 'sellerChooseTemplate' }"
      class="flex justify-center w-full pt-5"
    >
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
