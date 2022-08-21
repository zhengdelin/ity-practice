<!--Use:cards/feedbackCard-->
<template>
  <div
    class="flex flex-row items-center w-full h-28 lg:h-40 2xl:h-[220px] p-12 lg:p-16 bg-[#F9F9F9]"
  >
    <div
      class="flex justify-center border-[3px] lg:border-4 border-solid border-[#AE2519] w-4/12 sm:w-5/12 2xl:w-[595px] h-16 lg:h-20 2xl:h-[100px]"
    >
      <p
        class="flex items-center text-xl sm:text-2xl lg:text-3xl font-semibold text-[#AE2519]"
      >
        店家評價
      </p>
    </div>
    <div
      class="flex items-center justify-center border-t-[3px] border-r-[3px] border-b-[3px] lg:border-t-4 lg:border-r-4 lg:border-b-4 border-solid border-[#AE2519] w-8/12 sm:w-7/12 2xl:w-[915px] h-16 lg:h-20 2xl:h-[100px] space-x-2 lg:space-x-5"
    >
      <star-icon
        class="w-[28px] sm:w-10 lg:w-[50px] h-[28px] sm:h-10 lg:h-[50px]"
      ></star-icon>
      <star-icon
        class="w-[28px] sm:w-10 lg:w-[50px] h-[28px] sm:h-10 lg:h-[50px]"
      ></star-icon>
      <star-icon
        class="w-[28px] sm:w-10 lg:w-[50px] h-[28px] sm:h-10 lg:h-[50px]"
      ></star-icon>
      <star-icon
        class="w-[28px] sm:w-10 lg:w-[50px] h-[28px] sm:h-10 lg:h-[50px]"
      ></star-icon>
    </div>
  </div>
</template>

<script>
import starIcon from "@/vues/icons/starIcon.vue";

export default {
  name: "ratingPage",
  components: {
    starIcon,
  },
};
</script>
