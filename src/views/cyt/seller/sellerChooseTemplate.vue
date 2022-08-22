<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <div
      class="grid justify-items-center grid-cols-2 md:grid-cols-3 bg-white gap-x-10 gap-y-[60px]"
    >
      <template-card
        v-for="(item, index) in templateCardList"
        :key="index"
        :templateCard="item"
      ></template-card>
    </div>

    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'sellerMakeCoupon' }" class="w-full">
          <classic-button
            :name="'回上一步驟'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <router-link :to="{ name: '' }" class="w-full">
          <classic-button
            :name="'繼續'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
          ></classic-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import classicButton from "@/vues/classic/classicButton.vue";
import templateCard from "@/vues/cards/templateCard.vue";
import couponType3 from "@/vues/coupons/couponType3.vue";
import couponType4 from "@/vues/coupons/couponType4.vue";

export default {
  name: "chooseTemplatePage",
  components: {
    templateCard,
    classicButton,
    // couponType3,
    // couponType4,
  },
  setup() {
    const templateCardList = [
      {
        title: "template 1",
        coupon: couponType3,
      },
      {
        title: "template 2",
        coupon: couponType4,
      },
      {
        title: "template 3",
        coupon: couponType3,
      },
      {
        title: "template 4",
        coupon: couponType4,
      },
      {
        title: "template 5",
        coupon: couponType3,
      },
      {
        title: "template 6",
        coupon: couponType4,
      },
    ];
    return { templateCardList };
  },
};
</script>

<style scoped></style>
