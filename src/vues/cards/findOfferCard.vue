<!--Use:findOfferBeforeLogin-->
<template>
  <div
    @click="forword"
    class="flex flex-col items-center w-5/6 md:w-full h-fit rounded-xl border-2 border-[#76448A] bg-white space-y-5 sm:space-y-8 xl:space-y-10 2xl:space-y-[60px] pt-5 2xl:pt-[60px] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.03] duration-300 hover:shadow-xl"
  >
    <div
      class="flex justify-center w-1/2 2xl:w-[380px] h-48 sm:h-64 md:h-48 lg:h-32 xl:h-44 2xl:h-[380px] overflow-hidden bg-no-repeat bg-cover bg-center"
    >
      <img
        class="w-full h-full rounded-full"
        src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      />
    </div>
    <!--店名-->
    <div
      class="flex items-center justify-center w-full h-1/6 px-10 md:px-8 xl:px-12"
    >
      <div
        class="flex items-center justify-center w-5/6 md:w-full h-16 sm:h-20 2xl:h-[100px] text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-white tracking-wide bg-[#4B4B4B] rounded-lg md:rounded-xl p-4 sm:p-2 lg:p-6"
      >
        {{ findOfferCard.sellerName }}
      </div>
    </div>
    <!--優惠券-->
    <div class="flex flex-col items-center w-full h-4/6 bg-black">
      <coupon-type-3></coupon-type-3>
      <coupon-type-4></coupon-type-4>
    </div>
  </div>
</template>

<script>
import couponType3 from "@/vues/coupons/couponType3.vue";
import couponType4 from "@/vues/coupons/couponType4.vue";
import { useRouter } from "vue-router";

export default {
  //props: { sellerName: String },
  props: {
    findOfferCard: { type: Object, default: () => ({}) },
  },
  components: { couponType3, couponType4 },
  setup() {
    const router = useRouter();
    // 之後要改掉
    const forword = () => {
      router.push({ name: "eachsellerPage" });
    };

    return { forword };
  },
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
