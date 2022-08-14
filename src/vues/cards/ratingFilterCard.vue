<template>
  <div
    class="flex flex-col xl:justify-center w-[400px] md:w-full xl:w-[480px] 2xl:w-[660px] h-full md:h-80 bg-[#F2F2F2] rounded-xl p-5 lg:p-8 space-y-4"
  >
    <p class="text-xl md:text-2xl font-semibold text-[#4B4B4B]">
      {{ filterName }}
    </p>
    <div>
      <classic-checkbox-type-2
        :item1="'Rated 1+'"
        :item2="'Rated 2+'"
        :item3="'Rated 3+'"
        :item4="'Rated 4+'"
      ></classic-checkbox-type-2>
    </div>
  </div>
</template>

<script>
import classicCheckboxType2 from "@/vues/classic/classicCheckboxType2.vue";

export default {
  props: {
    filterName: String,
  },
  components: { classicCheckboxType2 },

  setup() {},
};
</script>
