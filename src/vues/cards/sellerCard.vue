<template>
  <div
    class="flex flex-col items-center w-1/4 2xl:w-[380px] h-40 sm:h-56 xl:h-64 2xl:h-[400px] space-y-2 sm:space-y-4 xl:space-y-6 2xl:space-y-10 bg-[#4B4B4B]"
  >
    <div
      class="flex w-24 h-24 sm:w-32 sm:h-32 2xl:w-60 2xl:h-60 rounded-full mt-4 lg:mt-6 2xl:mt-10"
    >
      <img
        class="rounded-full"
        src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      />
    </div>
    <div
      class="flex text-sm lg:text-base xl:text-lg 2xl:text-2xl font-normal xl:font-semibold text-white"
    >
      {{ seller }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: String,
    },
  },
};
</script>
