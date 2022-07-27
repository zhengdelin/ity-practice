<template>
  <div
    class="flex items-center border border-solid border-[#76448A] w-full h-[140px] bg-white p-10"
  >
    <p class="text-3xl font-semibold text-black">{{ name }}</p>
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
