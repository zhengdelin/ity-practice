<template>
  <div class="flex justify-center items-center bg-[#76448A] cursor-pointer">
    <p class="text-base lg:text-xl 2xl:text-2xl font-semibold text-white">
      {{ name }}
    </p>
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
