<template>
  <div class="space-y-20">
    <div class="flex justify-end w-[720px] h-[660px]">
      <map-area class="relative w-[660p] h-[660px]"></map-area>
      <Vue3Lottie
        :animationData="mapJSON"
        class="absolute bottom-0 left-0 w-[380px] h-[380px]"
      />
      <!--<div class="flex items-center w-[660px] h-[660px] bg-[#B2415C]">
        <Vue3Lottie :animationData="mapJSON" class="w-[380px] h-[380px]" />
      </div>-->
    </div>
    <div><classic-small-item :title="'特約地圖'"></classic-small-item></div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import mapArea from "@/vues/functionIntro/appointmentMapArea.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import mapJSON from "@/vues/json/map-browsing.json";

export default {
  components: {
    Vue3Lottie,
    mapArea: mapArea,
    classicSmallItem: classicSmallItem,
  },
  data() {
    return {
      mapJSON,
    };
  },
};
</script>
