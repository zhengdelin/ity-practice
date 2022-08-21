<!--Use:cards/ratingFilterCard-->
<template>
  <ul class="grid gap-6 w-full grid-cols-2">
    <li>
      <input
        type="checkbox"
        id="item1"
        value=""
        class="hidden peer"
        required=""
      />
      <label
        for="item1"
        class="inline-flex justify-between items-center p-1 md:px-5 md:py-3 lg:px-6 xl:p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-white peer-checked:text-gray-600 hover:bg-[#BEDBDF]"
      >
        <div class="w-full text-lg font-semibold">{{ item1 }}</div>
      </label>
    </li>
    <li>
      <input type="checkbox" id="item2" value="" class="hidden peer" />
      <label
        for="item2"
        class="inline-flex justify-between items-center p-1 md:px-5 md:py-3 lg:px-6 xl:p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-white peer-checked:text-gray-600 hover:bg-[#BEDBDF]"
      >
        <div class="w-full text-lg font-semibold">{{ item2 }}</div>
      </label>
    </li>
    <li>
      <input type="checkbox" id="item3" value="" class="hidden peer" />
      <label
        for="item3"
        class="inline-flex justify-between items-center p-1 md:px-5 md:py-3 lg:px-6 xl:p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-white peer-checked:text-gray-600 hover:bg-[#BEDBDF]"
      >
        <div class="w-full text-lg font-semibold">{{ item3 }}</div>
      </label>
    </li>
    <li>
      <input type="checkbox" id="item4" value="" class="hidden peer" />
      <label
        for="item4"
        class="inline-flex justify-between items-center p-1 md:px-5 md:py-3 lg:px-6 xl:p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-white peer-checked:text-gray-600 hover:bg-[#BEDBDF]"
      >
        <div class="w-full text-lg font-semibold">{{ item4 }}</div>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    item1: String,
    item2: String,
    item3: String,
    item4: String,
  },
  components: {},

  setup() {},
};
</script>
