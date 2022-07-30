<template>
  <div
    class="flex justify-center items-end pb-5 w-[520px] h-[520px] bg-[#F6F6F6]"
  >
    <p class="font-semibold text-4xl tracking-wider text-[#2D2D2D]">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>
