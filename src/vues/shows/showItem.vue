<template>
  <div class="flex flex-row h-16 xl:h-20 space-x-5 xl:space-x-10">
    <div
      class="flex justify-center items-center rounded-sm xl:rounded w-1/3 xl:w-1/6 text-lg xl:text-xl text-white bg-[#909090]"
    >
      {{ title }}
    </div>
    <div
      class="flex justify-start items-center w-2/3 xl:w-5/6 pl-5 xl:pl-10 text-base xl:text-xl bg-[#F9F9F9] truncate"
    >
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String, content: String },
  //   showItem: { type: Object, default: () => ({}) },
  setup() {},
};
</script>

<style scoped></style>
