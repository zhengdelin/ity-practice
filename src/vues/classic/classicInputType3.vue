<template>
  <div class="flex flex-row w-full h-12 sm:h-20 2xl:h-[100px]">
    <div class="flex justify-center items-center w-1/3 h-full bg-[#FFD971]">
      <div
        class="px-2 lg:px-3 text-base sm:text-xl xl:text-2xl font-medium xl:font-semibold text-[#4B4B4B] tracking-wider"
      >
        {{ classicInputType3.title }}
      </div>
    </div>
    <div class="w-2/3 h-full">
      <input
        type="text"
        class="w-full h-full px-6 text-base md:text-lg lg:text-xl 2xl:text-2xl text-black bg-[#F2F2F2] transition ease-in-out m-0 focus:text-[#4B4B4B] focus:bg-[#F9F9F9] focus:outline-none"
        placeholder="請輸入......"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classicInputType3: { type: Object, default: () => ({}) },
  },
};
</script>
