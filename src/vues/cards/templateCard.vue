<template>
  <div
    class="flex flex-col justify-center border-2 border-dashed border-[#C4C4C4] rounded-xl w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 space-y-5 lg:space-y-8 2xl:space-y-10 overflow-hidden"
  >
    <div
      class="flex flex-row justify-center items-center h-10 md:h-14 xl:h-20 space-x-5 xl:space-x-8 2xl:space-x-10 pt-3 xl:pt-5"
    >
      <!--pt-4 lg:pt-8 2xl:pt-10-->
      <div class="flex items-center justify-center">
        <!-- <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 hover:bg-black"
        /> -->
        <input
          checked
          id="purple-radio"
          type="radio"
          value=""
          name="colored-radio"
          class="w-4 lg:w-6 2xl:w-8 h-4 lg:h-6 2xl:h-8 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500"
        />
      </div>
      <div class="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#2D2D2D]">
        {{ templateCard.title }}
      </div>
    </div>
    <div class="w-full h-fit">
      <component :is="templateCard.coupon" class="w-full h-full" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    templateCard: { type: Object, default: () => ({}) },
  },
  setup() {},
};
</script>
