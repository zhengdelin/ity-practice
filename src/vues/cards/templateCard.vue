<template>
  <div
    class="flex flex-col justify-end border-2 border-dashed border-[#C4C4C4] rounded-xl w-full h-[550px]"
  >
    <div
      class="flex justify-center items-center h-[200px] text-4xl text-[#2D2D2D] bg-white"
    >
      {{ templateCard.title }}
    </div>
    <div class="w-full h-[350px] bg-[#B983CE]">
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
