<template>
  <div class="w-full h-48 space-y-8">
    <div class="text-left text-3xl font-bold text-[#4B4B4B]">
      {{ classicInput.title }}
    </div>
    <div
      class="flex flex-row items-center w-full h-[120px] border-[3px] border-[#76448A] rounded-xl p-10 space-x-10"
    >
      <component :is="classicInput.icon" class="w-[50px] h-[50px]" />
      <input
        type="text"
        class="w-full px-3 py-4 text-base font-normal text-[#4B4B4B] bg-white border border-solid border-[#F2F2F2] rounded transition ease-in-out m-0 focus:text-[#76448A] focus:bg-white focus:border-[#B983CE] focus:outline-none"
        placeholder="props values"
      />
      <!--<div class="text-2xl font-medium bg-black">
        {{ classicInput.content }}
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classicInput: { type: Object, default: () => ({}) },
  },
};
</script>
