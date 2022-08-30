<template>
  <div
    class="flex flex-row justify-center items-center border-2 border-[#9763AB] w-full h-20 xl:h-[100px] px-2 bg-white hover:bg-[#F9F9F9] rounded xl:rounded-lg space-x-5 md:space-x-8 xl:space-x-10 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
  >
    <div
      class="w-5 md:w-7 xl:w-10 h-5 md:h-7 xl:h-10 bg-[#B983CE] rounded-full"
    ></div>
    <div class="text-xl lg:text-2xl xl:text-3xl text-[#4B4B4B]">
      {{ clickButton.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clickButton: { type: Object, default: () => ({}) },
  },
};
</script>
