<template>
  <div
    class="flex flex-col justify-center items-center p-4 xl:p-6 w-2/3 sm:7/12 md:w-1/3 2xl:w-[520px] h-48 md:h-60 xl:h-96 2xl:h-[520px] bg-[#F6F6F6] rounded-xl space-y-5 2xl:space-y-10"
  >
    <component :is="identityItem.animation" class="w-[300px] h-[300px]" />
    <p
      class="font-semibold text-xl sm:text-2xl 2xl:text-4xl tracking-wider text-[#2D2D2D]"
    >
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
