<template>
  <div
    class="flex items-center justify-center space-x-8 w-[220px] h-[100px] bg-white"
  >
    <p class="text-xl font-semibold tracking-wider text-[#2D2D2D]">
      {{ name }}
    </p>
    <div class="w-[30px] h-[30px] bg-black"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>
