<template>
  <div
    class="flex items-center border border-solid border-[#76448A] w-full h-20 lg:h-28 2xl:h-[140px] bg-white p-6 2xl:p-10"
  >
    <p class="text-base lg:text-xl 2xl:text-2xl font-semibold text-[#9763AB]">
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
