<template>
  <div class="w-full h-full 2xl:h-48 space-y-4 2xl:space-y-8">
    <div class="text-left text-xl 2xl:text-3xl font-bold text-[#4B4B4B]">
      {{ classicInputType2.title }}
    </div>
    <input
      type="text"
      class="w-full h-[100px] px-6 text-2xl font-normal text-[#4B4B4B] bg-white border-2 xl:border-[3px] border-solid border-[#4B4B4B] rounded-lg transition ease-in-out m-0 focus:text-[#76448A] focus:bg-white focus:border-[#76448A] focus:outline-none"
      placeholder="請輸入......"
    />
  </div>
</template>

<script>
export default {
  props: {
    classicInputType2: { type: Object, default: () => ({}) },
  },
};
</script>
