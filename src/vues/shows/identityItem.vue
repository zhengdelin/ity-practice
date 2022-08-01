<template>
  <div
    class="flex flex-col justify-center items-center p-4 xl:p-6 w-2/3 sm:7/12 md:w-full 2xl:w-[520px] h-48 md:h-60 lg:h-72 xl:h-96 2xl:h-[520px] bg-[#F6F6F6] rounded-xl space-y-5 2xl:space-y-10"
  >
    <component
      :is="identityItem.animation"
      class="w-60 md:w-48 lg:w-64 xl:w-[300px] h-60 md:h-48 lg:h-64 xl:h-[300px]"
    />
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
