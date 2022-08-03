<template>
  <div class="space-y-[60px]">
    <div
      class="flex flex-col items-center lg:flex-row space-x-0 lg:space-x-10 space-y-5 lg:space-y-0 2xl:justify-between"
    >
      <coupon-Type3></coupon-Type3>
      <coupon-Type4></coupon-Type4>
    </div>
    <div class="flex justify-center">
      <accordion-Item :title="'賣家優惠券使用規則'"></accordion-Item>
    </div>
  </div>
</template>

<script>
import couponType3 from "@/vues/coupons/couponType3.vue";
import couponType4 from "@/vues/coupons/couponType4.vue";
import accordionItem from "@/vues/shows/accordionItem.vue";

export default {
  name: "couponPage",
  components: {
    couponType3: couponType3,
    couponType4: couponType4,
    accordionItem: accordionItem,
  },
};
</script>
