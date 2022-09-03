<template>
  <div class="flex flex-row w-full h-16 sm:h-20 xl:h-[100px] 2xl:h-[120px]">
    <div class="flex justify-center items-center w-1/3 h-full bg-[#FFF7D0]">
      <div
        class="px-2 lg:px-3 text-base sm:text-xl xl:text-2xl font-medium xl:font-semibold text-[#6F6F6F] tracking-wider"
      >
        是否需登入才可領取優惠
      </div>
    </div>
    <div class="w-2/3 h-full">
      <div
        class="flex items-center h-1/2 pl-4 md:pl-6 lg:pl-8 xl:pl-10 rounded border border-gray-200 bg-[#F2F2F2] hover:bg-[#F9F9F9] cursor-pointer"
      >
        <input
          id="bordered-radio-1"
          type="radio"
          value=""
          name="bordered-radio"
          class="w-3 sm:w-4 xl:w-5 h-3 sm:h-4 xl:h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <label
          for="bordered-radio-1"
          class="py-4 ml-2 w-full text-sm md:text-base xl:text-lg 2xl:text-xl font-medium text-gray-900"
          >是</label
        >
      </div>
      <div
        class="flex items-center h-1/2 pl-4 md:pl-6 lg:pl-8 xl:pl-10 rounded border border-gray-200 bg-[#F2F2F2] hover:bg-[#F9F9F9] cursor-pointer"
      >
        <input
          checked
          id="bordered-radio-2"
          type="radio"
          value=""
          name="bordered-radio"
          class="w-3 sm:w-4 xl:w-5 h-3 sm:h-4 xl:h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <label
          for="bordered-radio-2"
          class="py-4 ml-2 w-full text-sm md:text-base xl:text-lg 2xl:text-xl font-medium text-gray-900"
          >否</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     classicInputType3: { type: Object, default: () => ({}) },
  //   },
};
</script>
