<template>
  <div class="space-y-[60px] bg-black">
    <div class="flex flex-row space-x-10">
      <coupon-Type3></coupon-Type3>
      <coupon-Type4></coupon-Type4>
    </div>
    <div><accordion-Item></accordion-Item></div>
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
