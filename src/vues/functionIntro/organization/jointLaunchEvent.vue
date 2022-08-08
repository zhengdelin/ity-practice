<!--Use:organizationSystemFunction-->
<template>
  <div class="space-y-10 xl:space-y-20 md:w-1/2">
    <div
      class="relative flex justify-end items-center w-full 2xl:w-[720px] h-[480px] 2xl:h-[660px]"
    >
      <events-area
        class="absolute bottom-0 right-0 w-full 2xl:w-[660p] h-[480px] 2xl:h-[660px] text-white"
      ></events-area>
      <Vue3Lottie
        :animationData="eventsJSON"
        class="w-[280px] md:w-60 2xl:w-[380px] h-[280px] md:h-60 2xl:h-[380px]"
      />
    </div>
    <div class="grid justify-items-center lg:justify-items-center">
      <classic-small-item :title="'與其他組織推出活動'"></classic-small-item>
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import eventsArea from "@/vues/functionArea/areaType2.vue";
import classicSmallItem from "@/vues/classic/classicSmallItem.vue";
import eventsJSON from "@/vues/json/group-of-people-communicating.json";

export default {
  components: {
    Vue3Lottie,
    eventsArea,
    classicSmallItem,
  },
  data() {
    return {
      eventsJSON,
    };
  },
};
</script>
