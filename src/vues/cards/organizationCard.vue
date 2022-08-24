<!--Use:sellerHome-->
<template>
  <div
    class="flex flex-col items-center justify-center w-full h-72 md:h-64 lg:h-72 xl:h-80 2xl:h-[500px] bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] p-6 md:p-5 2xl:p-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
  >
    <div class="w-1/2 md:w-2/3 lg:w-1/2 h-3/6 lg:h-7/12">
      <component
        :is="organizationCard.organizationPhoto"
        class="border-2 border-white w-full h-full rounded-full"
      />
    </div>
    <div
      class="flex justify-center items-end w-full h-1/6 lg:h-4/12 font-semibold xl:font-bold text-lg xl:text-xl 2xl:text-2xl"
    >
      <p>{{ organizationCard.organizationName }}</p>
    </div>
    <div
      class="flex flex-row justify-center items-center w-full h-2/6 lg:h-1/12 space-x-4 2xl:space-x-10"
    >
      <router-link :to="{ name: '' }">
        <classic-button
          :name="'MORE'"
          class="w-20 md:w-16 lg:w-24 xl:w-28 2xl:w-40 h-10 xl:h-12 2xl:h-16 rounded-md bg-[#9763AB] text-white hover:bg-gradient-to-r hover:from-[#fdd6bd] hover:to-[#f794a4]"
        ></classic-button
        ><!--background-image: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);-->
      </router-link>
      <router-link :to="{ name: '' }">
        <classic-button
          :name="'檢舉'"
          class="w-20 md:w-16 lg:w-24 xl:w-28 2xl:w-40 h-10 xl:h-12 2xl:h-16 rounded-md bg-white text-[#2D2D2D] hover:bg-[#F6F6F6]"
        ></classic-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  props: {
    organizationCard: { type: Object, default: () => ({}) },
  },
  components: {
    classicButton,
  },
  setup() {},
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
