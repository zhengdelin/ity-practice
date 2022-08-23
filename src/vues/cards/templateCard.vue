<template>
  <div
    class="flex flex-col justify-center border-2 border-dashed border-[#C4C4C4] rounded-xl w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 space-y-5 lg:space-y-8 2xl:space-y-10 overflow-hidden"
  >
    <div
      class="flex justify-center items-center h-fit pt-4 lg:pt-8 2xl:pt-10 text-xl lg:text-2xl xl:text-4xl text-[#2D2D2D] bg-white"
    >
      {{ templateCard.title }}
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
