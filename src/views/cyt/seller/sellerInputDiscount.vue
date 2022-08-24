<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 xl:space-y-20 mb-20 2xl:mb-40"
  >
    <classic-title
      :content="'輸入折扣金額'"
      class="w-full mt-14"
    ></classic-title>
    <classic-input
      v-for="(item, index) in classicInputList"
      :key="index"
      :classicInput="item"
    >
    </classic-input>
    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'sellerChooseTemplate' }" class="w-full">
          <classic-button
            :name="'回上一步驟'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white hover:bg-gradient-to-r hover:from-[#ebebeb] hover:to-[#dcdddf] text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <router-link :to="{ name: 'sellerPostCoupon' }" class="w-full">
          <classic-button
            :name="'繼續'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] hover:bg-gradient-to-r hover:from-[#fdd6bd] hover:to-[#f794a4] text-white"
          ></classic-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import classicInput from "@/vues/classic/classicInputType1.vue";
import priceIcon from "@/vues/icons/priceIcon.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "InputDiscountPage",
  components: {
    classicTitle,
    classicInput,
    classicButton,
    // priceIcon,
  },
  setup() {
    const classicInputList = [
      { title: "折扣金額 (以新臺幣為單位)", icon: priceIcon },
    ];
    return { classicInputList };
  },
};
</script>

<style scoped></style>
