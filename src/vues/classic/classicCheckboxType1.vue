<!--cards/popularityFilterCard-->
<template>
  <ul class="grid gap-6 w-full grid-cols-2">
    <li>
      <input
        type="checkbox"
        id="option1"
        value=""
        class="hidden peer"
        required=""
      />
      <label
        for="option1"
        class="inline-flex justify-between items-center p-1 md:px-5 md:py-3 lg:p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-white peer-checked:text-gray-600 hover:bg-[#BEDBDF]"
      >
        <div class="w-full text-lg font-semibold">{{ option1 }}</div>
      </label>
    </li>
    <li>
      <input type="checkbox" id="option2" value="" class="hidden peer" />
      <label
        for="option2"
        class="inline-flex justify-between items-center p-1 md:px-5 md:py-3 lg:p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-white peer-checked:text-gray-600 hover:bg-[#BEDBDF]"
      >
        <div class="w-full text-lg font-semibold">{{ option2 }}</div>
      </label>
    </li>
    <li>
      <input type="checkbox" id="option3" value="" class="hidden peer" />
      <label
        for="option3"
        class="inline-flex justify-between items-center p-1 md:px-5 md:py-3 lg:p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-white peer-checked:text-gray-600 hover:bg-[#BEDBDF]"
        ><!--background-image: linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%);-->
        <div class="w-full text-lg font-semibold">{{ option3 }}</div>
      </label>
    </li>
    <li>
      <input type="checkbox" id="option4" value="" class="hidden peer" />
      <label
        for="option4"
        class="inline-flex justify-between items-center p-1 md:px-5 md:py-3 lg:p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-white peer-checked:text-gray-600 hover:bg-[#BEDBDF]"
      >
        <div class="w-full text-lg font-semibold">{{ option4 }}</div>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    option1: String,
    option2: String,
    option3: String,
    option4: String,
  },
  components: {},

  setup() {},
};
</script>
