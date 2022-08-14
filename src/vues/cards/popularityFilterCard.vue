<template>
  <div
    class="flex flex-col xl:justify-center w-[400px] md:w-full xl:w-[480px] 2xl:w-[660px] h-full md:h-80 bg-[#F2F2F2] rounded-xl p-5 lg:p-8 space-y-4"
  >
    <p class="text-xl md:text-2xl font-semibold text-[#4B4B4B]">
      {{ filterName }}
    </p>
    <div>
      <classic-checkbox
        :option1="'+1000'"
        :option2="'+2000'"
        :option3="'+3000'"
        :option4="'+4000'"
      ></classic-checkbox>
    </div>
  </div>
</template>

<script>
import classicCheckbox from "@/vues/classic/classicCheckboxType1.vue";

export default {
  props: {
    filterName: String,
  },
  components: { classicCheckbox },

  setup() {},
};
</script>
