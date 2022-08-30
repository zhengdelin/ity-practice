<template>
  <div
    class="flex flex-row items-center border-b-2 border-[#BB8FCE] w-full h-[120px] xl:h-[150px] p-10 bg-white drop-shadow-md"
  >
    <div class="flex flex-row items-center w-1/2 xl:w-1/3">
      <div class="w-1/4">
        <div class="w-4 md:w-5 h-4 md:h-5 bg-[#6F6F6F]"></div>
      </div>
      <div
        class="w-3/4 text-base md:text-lg xl:text-xl text-left text-[#2D2D2D] truncate"
      >
        {{ infoItem.title }}
      </div>
    </div>
    <div
      class="w-1/2 xl:w-2/3 text-base md:text-lg xl:text-xl text-left text-[#4B4B4B] truncate"
    >
      {{ infoItem.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoItem: { type: Object, default: () => ({}) },
  },
};
</script>

<style scoped></style>
