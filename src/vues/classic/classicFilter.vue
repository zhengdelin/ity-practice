<template>
  <div
    class="flex flex-col justify-center items-center w-full h-[480px] bg-white space-y-10"
  >
    <!--兩個Input-->
    <div class="w-5/6 flex flex-row">
      <div class="w-full h-full 2xl:h-48 space-y-4 2xl:space-y-8">
        <div class="text-left text-xl 2xl:text-3xl font-bold text-[#4B4B4B]">
          店家位址
        </div>
        <div
          class="flex flex-row items-center w-full h-20 sm:h-28 2xl:h-[130px] border xl:border-[1px] border-black rounded-l-lg p-6 space-x-6 2xl:space-x-10"
        >
          <location-icon
            class="w-10 2xl:w-[50px] h-10 2xl:h-[50px] stroke-[#4B4B4B]"
          ></location-icon>
          <input
            type="text"
            class="w-full px-3 py-4 lg:py-5 text-base font-normal text-[#4B4B4B] bg-white border border-solid border-[#F2F2F2] rounded transition ease-in-out m-0 focus:text-[#76448A] focus:bg-white focus:border-[#B983CE] focus:outline-none"
            placeholder="EX : 台中"
          />
        </div>
      </div>
      <div class="w-full h-full 2xl:h-48 space-y-4 2xl:space-y-8">
        <div class="text-left text-xl 2xl:text-3xl font-bold text-[#4B4B4B]">
          餐飲類型
        </div>
        <div
          class="flex flex-row items-center w-full h-20 sm:h-28 2xl:h-[130px] border-t border-b border-l-0 border-r xl:border-t-[1px] xl:border-b-[1px] xl:border-r-[1px] border-black rounded-r-lg p-6 space-x-6 2xl:space-x-10"
        >
          <type-icon
            class="w-10 2xl:w-[50px] h-10 2xl:h-[50px] stroke-[#4B4B4B]"
          ></type-icon>
          <input
            type="text"
            class="w-full px-3 py-4 lg:py-5 text-base font-normal text-[#4B4B4B] bg-white border border-solid border-[#F2F2F2] rounded transition ease-in-out m-0 focus:text-[#76448A] focus:bg-white focus:border-[#B983CE] focus:outline-none"
            placeholder="EX : 火鍋"
          />
        </div>
      </div>
    </div>
    <classic-button
      :name="'搜尋'"
      class="w-2/3 lg:w-1/2 2xl:w-1/3 h-12 md:h-16 xl:h-20 2xl:h-[100px] rounded-md md:rounded-lg bg-[#9763AB] text-white"
    ></classic-button>
  </div>
</template>

<script>
import classicButton from "@/vues/classic/classicButton.vue";
import locationIcon from "@/vues/icons/locationType2Icon.vue";
import typeIcon from "@/vues/icons/typeIcon.vue";

export default {
  components: { classicButton, locationIcon, typeIcon },
  setup() {},
};
</script>
