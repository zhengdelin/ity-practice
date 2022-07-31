<template>
  <div
    class="flex flex-col justify-center items-center pb-5 w-[520px] h-[520px] bg-[#F6F6F6] rounded-xl"
  >
    <component :is="identityItem.animation" class="w-[300px] h-[300px]" />
    <p class="font-semibold text-4xl tracking-wider text-[#2D2D2D]">
      {{ identityItem.content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    identityItem: { type: Object, default: () => ({}) },
  },
};
</script>
