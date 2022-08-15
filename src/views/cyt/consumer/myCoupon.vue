<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <div>
      <classic-title
        :content="'我的優惠券'"
        class="w-full bg-[#76448A]"
      ></classic-title>
    </div>
    <div
      class="grid justify-items-center grid-cols-2 lg:grid-cols-3 sm:gap-x-5 lg:gap-x-10 gap-y-5 lg:gap-y-10"
    >
      <coupon-type-3></coupon-type-3>
      <coupon-type-4></coupon-type-4>
      <coupon-type-3></coupon-type-3>
      <coupon-type-4></coupon-type-4>
      <coupon-type-3></coupon-type-3>
      <coupon-type-4></coupon-type-4>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import couponType3 from "@/vues/coupons/couponType3.vue";
import couponType4 from "@/vues/coupons/couponType4.vue";

export default {
  name: "myCouponPage",
  components: {
    classicTitle,
    couponType3,
    couponType4,
  },
  setup() {},
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
