<template>
  <div
    class="flex justify-center items-center w-full h-60 sm:h-72 md:h-80 lg:h-[380px] xl:h-[400px] 2xl:h-[450px] shadow-md lg:shadow-xl"
  >
    <label
      for="dropzone-file"
      class="flex flex-col justify-center items-center w-full h-full bg-[#F6F6F6] rounded-lg lg:rounded-2xl border-2 border-[#76448A] border-solid cursor-pointer hover:bg-white"
    >
      <div
        class="flex flex-col justify-center items-center space-y-5 2xl:space-y-10"
      >
        <component :is="clickDiv.animation" class="w-full h-full" />
        <div class="text-xl md:text-2xl xl:font-semibold text-[#2D2D2D]">
          {{ clickDiv.title }}
        </div>
      </div>
      <input id="dropzone-file" type="file" class="hidden" />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    clickDiv: { type: Object, default: () => ({}) },
  },
  setup() {},
};
</script>
