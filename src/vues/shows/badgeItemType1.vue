<template>
  <span
    class="w-20 h-10 bg-[#9763AB] text-white text-sm font-medium sm:font-semibold p-2 rounded-md"
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
