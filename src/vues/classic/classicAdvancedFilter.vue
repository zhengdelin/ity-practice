<template>
  <div
    class="flex flex-col justify-center items-center space-y-5 lg:space-y-6 2xl:space-y-10"
  >
    <div
      class="flex flex-col items-center md:flex-row space-x-0 md:space-x-10 space-y-5 md:space-y-0"
    >
      <popularity-filter-card
        :filterName="'人氣'"
        class="z-20"
      ></popularity-filter-card>
      <rating-filter-card
        :filterName="'評價'"
        class="z-20"
      ></rating-filter-card>
    </div>
    <router-link :to="{ name: '' }" class="flex justify-center w-full">
      <classic-button
        :name="'進階篩選符合條件之商品'"
        class="w-full xl:w-1/2 2xl:w-[520px] h-16 2xl:h-[72px] rounded-md xl:rounded-xl bg-[#B983CE] hover:bg-gradient-to-r hover:from-[#fccb90] hover:to-[#d57eeb] text-white z-20"
      ></classic-button>
    </router-link>
  </div>
</template>

<script>
import popularityFilterCard from "@/vues/cards/popularityFilterCard.vue";
import ratingFilterCard from "@/vues/cards/ratingFilterCard.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  components: { popularityFilterCard, ratingFilterCard, classicButton },
  setup() {},
};
</script>
