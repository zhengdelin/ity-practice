<template>
  <div
    class="flex justify-center items-center w-[380px] h-[120px] font-semibold text-4xl bg-[#F6F6F6] rounded-lg border-[0.5px] border-black"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
