<!--Use:sellerContractIntro-->
<template>
  <div
    class="flex flex-col sm:flex-row w-4/5 sm:w-full h-[520px] lg:h-[480px] xl:h-[400px] 2xl:h-[500px] space-x-0 sm:space-x-10 space-y-4 sm:space-y-0"
  >
    <!--Card-->
    <div
      class="flex flex-col justify-between items-center lg:flex-row w-full sm:w-2/3 p-6 sm:p-4 lg:p-10 bg-[#B983CE] text-white rounded-md sm:rounded-2xl shadow-lg xl:shadow-xl"
    >
      <div
        class="flex flex-col justify-center items-start w-2/3 space-y-5 sm:space-y-8 lg:space-y-12 2xl:space-y-[60px]"
      >
        <div
          class="font-bold text-xl lg:text-2xl 2xl:text-4xl text-center lg:text-left"
        >
          {{ contractCard.title }}
        </div>
        <div
          class="font-semibold text-sm sm:text-base lg:text-xl 2xl:text-3xl text-center lg:text-left"
        >
          {{ contractCard.question1 }}
        </div>
        <div
          class="font-semibold text-sm sm:text-base lg:text-xl 2xl:text-3xl text-center lg:text-left"
        >
          {{ contractCard.question2 }}
        </div>
        <div
          class="font-semibold text-sm sm:text-base lg:text-xl 2xl:text-3xl text-center lg:text-left"
        >
          {{ contractCard.question3 }}
        </div>
        <!--<component :is="contractCard.animation" class="absolute top-0 right-0" />-->
      </div>
      <!--卡片動畫-->
      <component
        :is="contractCard.animation"
        class="w-40 sm:w-48 md:w-60 2xl:w-[250px] h-40 sm:h-48 md:h-60 2xl:h-[250px]"
      />
    </div>
    <!--廣告句-->
    <div
      class="flex justify-center items-center w-full sm:w-1/3 font-bold text-base sm:text-xl lg:text-2xl 2xl:text-3xl"
    >
      {{ contractCard.else }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contractCard: { type: Object, default: () => ({}) },
  },
};
</script>
