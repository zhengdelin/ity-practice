<template>
  <div
    class="flex items-center justify-center space-x-4 lg:space-x-6 2xl:space-x-8 w-32 h-16 lg:w-44 lg:h-20 2xl:w-[220px] 2xl:h-[100px] bg-white hover:bg-[#F6F6F6] cursor-pointer"
  >
    <p
      class="text-base xl:text-lg 2xl:text-xl font-semibold tracking-wider text-[#2D2D2D]"
    >
      {{ name }}
    </p>
    <component :is="icon" class="w-5 h-5 2xl:w-[30px] 2xl:h-[30px]" />
  </div>
</template>

<script>
export default {
  props: {
    /*name: {
      type: String,
    },*/
    props: {
      headerElement: null,
    },
  },
};
</script>
