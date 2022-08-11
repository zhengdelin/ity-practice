<!--Use:systemFunctionBeforeLogin-->
<template>
  <div class="space-y-10 xl:space-y-20 md:w-1/2">
    <div
      class="relative flex justify-end items-center w-full 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
    >
      <map-area
        class="absolute bottom-0 right-0 w-full 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
      ></map-area>
      <Vue3Lottie
        :animationData="mapJSON"
        class="w-[280px] md:w-60 2xl:w-[380px] h-[280px] md:h-60 2xl:h-[380px]"
      />
    </div>
    <div class="grid justify-items-center lg:justify-items-center">
      <classic-small-item :title="'特約地圖'"></classic-small-item>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import mapArea from "@/vues/functionArea/areaType1.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import mapJSON from "@/vues/json/map-browsing.json";

export default {
  components: {
    Vue3Lottie,
    mapArea,
    classicSmallItem,
  },
  setup() {
    return { mapJSON };
  },
};
</script>
