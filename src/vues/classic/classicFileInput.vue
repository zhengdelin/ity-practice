<template>
  <div class="flex justify-center items-center w-full">
    <label
      for="dropzone-file"
      class="flex flex-col justify-center items-center w-full h-full rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-[#F6F6F6]"
    >
      <div
        class="flex flex-col justify-center items-center space-y-4 lg:space-y-6 2xl:space-y-10"
      >
        <camera-icon></camera-icon>
        <p
          class="text-sm lg:text-lg 2xl:text-xl lg:font-semibold file:text-[#B2415C] text-[#4B4B4B]"
        >
          {{ content }}
        </p>
      </div>
      <input id="dropzone-file" type="file" class="hidden" />
    </label>
  </div>
</template>

<script>
import cameraIcon from "@/vues/icons/cameraIcon.vue";
export default {
  props: {
    content: String,
  },
  components: {
    cameraIcon,
  },
  setup() {},
};
</script>
