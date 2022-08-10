<template>
  <span
    class="w-20 h-10 bg-[#9763AB] text-white text-xs sm:text-sm 2xl:text-base font-medium sm:font-semibold p-2 rounded-md"
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
