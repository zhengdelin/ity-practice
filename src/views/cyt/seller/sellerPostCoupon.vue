<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 xl:space-y-[60px] mb-20 2xl:mb-40"
  >
    <!--成果展示區塊-->

    <div
      class="grid justify-items-center grid-cols-1 sm:grid-cols-2 gap-x-0 sm:gap-x-5 md:gap-x-8 2xl:gap-x-10 gap-y-5 sm:gap-y-0"
    >
      <!--左半部-->
      <div
        class="flex flex-row justify-center items-center w-full h-60 lg:h-80 2xl:h-[350px] bg-white drop-shadow-xl space-x-5 sm:space-x-3 xl:space-x-5 2xl:space-x-10 pr-4 lg:pr-10 xl:pr-12 2xl:pr-[60px]"
      >
        <Vue3Lottie
          :animationData="inspectionJSON"
          class="w-36 md:w-48 lg:w-52 xl:w-60 2xl:w-[300px] h-36 md:h-48 lg:h-52 xl:h-60 2xl:h-[300px]"
        />
        <div
          class="text-xl lg:text-2xl xl:text-4xl font-medium xl:font-semibold"
        >
          成<br />果<br />預<br />覽
        </div>
        <!--右箭頭icon-->
        <div>
          <arrow-right
            class="w-6 sm:w-8 md:w-6 lg:w-10 2xl:w-14 h-6 sm:h-8 md:h-6 lg:h-10 2xl:h-14 rotate-90 sm:rotate-0"
          ></arrow-right>
        </div>
      </div>
      <div class="flex justify-center items-center w-full bg-black">
        <coupon-type-3></coupon-type-3>
      </div>
    </div>
    <div
      class="flex justify-center items-center pl-6 lg:pl-8 2xl:pl-10 w-full h-14 sm:h-16 xl:h-20 2xl:h-[100px] bg-[#4B4B4B]"
    >
      <p class="text-lg lg:text-xl xl:text-3xl font-semibold text-white">
        輸入優惠券使用規則、限制條件
      </p>
    </div>
    <tinymce-editor v-model:content="content"></tinymce-editor>
    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'sellerInputDiscount' }" class="w-full">
          <classic-button
            :name="'回上一步驟'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white hover:bg-gradient-to-r hover:from-[#ebebeb] hover:to-[#dcdddf] text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <router-link :to="{ name: '' }" class="w-full">
          <classic-button
            :name="'發布'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] hover:bg-gradient-to-r hover:from-[#fdd6bd] hover:to-[#f794a4] text-white"
          ></classic-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import inspectionJSON from "@/vues/json/inspection-graphics.json";
import arrowRight from "@/vues/icons/arrowIcon.vue";
import tinymceEditor from "@/vues/shared/tinymceEditor.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import couponType3 from "@/vues/coupons/couponType3.vue";
import { ref } from "vue";

export default {
  name: "postCouponPage",
  components: {
    Vue3Lottie,
    arrowRight,
    tinymceEditor,
    classicButton,
    couponType3,
  },
  setup() {
    const content = ref();
    content.value = "<p>使用規則範例&nbsp;:&nbsp;只限定本校學生使用......</p>";
    return { content, inspectionJSON };
  },
};
</script>

<style scoped></style>
