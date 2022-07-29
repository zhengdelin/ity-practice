<template>
  <div
    class="flex flex-row items-center w-full h-40 2xl:h-[220px] p-12 lg:p-16 bg-[#F9F9F9]"
  >
    <div
      class="flex justify-center border-4 border-solid border-[#AE2519] w-3/12 sm:w-5/12 2xl:w-[595px] h-20 2xl:h-[100px]"
    >
      <p
        class="flex items-center text-xl sm:text-2xl lg:text-3xl font-semibold text-[#AE2519]"
      >
        店家評價
      </p>
    </div>
    <div
      class="flex items-center justify-center border-t-4 border-r-4 border-b-4 border-solid border-[#AE2519] w-9/12 sm:w-7/12 2xl:w-[915px] h-20 2xl:h-[100px] space-x-2 lg:space-x-5"
    >
      <star-icon class="w-10 h-10 lg:w-[50px] lg:h-[50px]"></star-icon>
      <star-icon class="w-10 h-10 lg:w-[50px] lg:h-[50px]"></star-icon>
      <star-icon class="w-10 h-10 lg:w-[50px] lg:h-[50px]"></star-icon>
      <star-icon class="w-10 h-10 lg:w-[50px] lg:h-[50px]"></star-icon>
    </div>
  </div>
</template>

<script>
import starIcon from "@/vues/icons/starIcon.vue";

export default {
  name: "ratingPage",
  components: {
    starIcon: starIcon,
  },
};
</script>
