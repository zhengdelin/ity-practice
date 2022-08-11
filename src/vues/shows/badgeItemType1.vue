<template>
  <span
    class="flex items-center justify-center w-20 md:w-16 xl:w-24 h-10 md:h-8 xl:h-12 bg-[#9763AB] text-white text-xs sm:text-sm 2xl:text-base font-medium sm:font-semibold p-2 rounded-md"
    >{{ badgeContent }}</span
  >
</template>

<script>
export default {
  props: {
    badgeContent: String,
  },
  setup() {},
};
</script>
