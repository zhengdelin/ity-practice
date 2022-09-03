<!--Note:BeforeLogin-->
<template>
  <div class="space-y-[60px]">
    <div
      class="grid justify-items-center grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-4 2xl:gap-x-10 gap-y-5 2xl:gap-y-8"
    >
      <!--flex flex-col items-center lg:flex-row space-x-0 lg:space-x-10 space-y-5 lg:space-y-0 2xl:justify-between-->
      <coupon-Type3></coupon-Type3>
      <coupon-Type4></coupon-Type4>
      <coupon-Type3></coupon-Type3>
      <coupon-Type4></coupon-Type4>
    </div>
    <div class="flex justify-center">
      <accordion-Item :title="'賣家優惠券使用規則'"></accordion-Item>
    </div>
    <click-div
      v-for="(item, index) in clickDivList"
      :key="index"
      :clickDiv="item"
    ></click-div>
  </div>
</template>

<script>
import couponType3 from "@/vues/coupons/couponType3.vue";
import couponType4 from "@/vues/coupons/couponType4.vue";
import accordionItem from "@/vues/shows/accordionItem.vue";
import clickDiv from "@/vues/buttons/clickDiv.vue";
import chooseAnimation from "@/vues/animation/chooseAnimation.vue";
import findTargetAnimation from "@/vues/animation/findTargetAnimation.vue";

export default {
  name: "couponPage",
  components: {
    couponType3,
    couponType4,
    accordionItem,
    clickDiv,
    // chooseAnimation,
    //  findTargetAnimation,
  },
  setup() {
    const clickDivList = [
      { animation: chooseAnimation, title: "選擇推出哪一款優惠券" },
      {
        animation: findTargetAnimation,
        title: "製作符合貴店家行銷決策的專屬優惠券",
      },
    ];
    return { clickDivList };
  },
};
</script>
