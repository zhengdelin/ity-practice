<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 xl:space-y-20 mb-20 2xl:mb-40"
  >
    <classic-title
      :content="'選擇一個優惠券模板'"
      class="w-full mt-14"
    ></classic-title>
    <div
      class="grid justify-items-center grid-cols-2 md:grid-cols-3 bg-white gap-x-5 md:gap-x-8 xl:gap-x-10 gap-y-10 md:gap-y-12 xl:gap-y-[60px] 2xl:gap-y-20"
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
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white hover:bg-gradient-to-r hover:from-[#ebebeb] hover:to-[#c4c5c7] text-[#2D2D2D]"
          ></classic-button
          ><!-- background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%); -->
        </router-link>
        <router-link :to="{ name: 'sellerInputDiscount' }" class="w-full">
          <classic-button
            :name="'繼續'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] hover:bg-gradient-to-r hover:from-[#fdd6bd] hover:to-[#f794a4] text-white"
          ></classic-button
          ><!-- background-image: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%); -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import templateCard from "@/vues/cards/templateCard.vue";
import templateType1 from "@/vues/couponTemplate/templateType1.vue";
import templateType2 from "@/vues/couponTemplate/templateType2.vue";
import templateType3 from "@/vues/couponTemplate/templateType3.vue";
import templateType4 from "@/vues/couponTemplate/templateType4.vue";
import templateType5 from "@/vues/couponTemplate/templateType5.vue";
import templateType6 from "@/vues/couponTemplate/templateType6.vue";

export default {
  name: "chooseTemplatePage",
  components: {
    classicTitle,
    templateCard,
    classicButton,
    // templateType1,
    // templateType2,
    // templateType3,
    // templateType4,
    // templateType5,
    // templateType6,
  },
  setup() {
    const templateCardList = [
      {
        title: "template 1",
        coupon: templateType1,
      },
      {
        title: "template 2",
        coupon: templateType2,
      },
      {
        title: "template 3",
        coupon: templateType3,
      },
      {
        title: "template 4",
        coupon: templateType4,
      },
      {
        title: "template 5",
        coupon: templateType5,
      },
      {
        title: "template 6",
        coupon: templateType6,
      },
    ];
    return { templateCardList };
  },
};
</script>

<style scoped></style>
