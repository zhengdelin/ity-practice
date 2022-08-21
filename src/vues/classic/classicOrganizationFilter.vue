<!--Use:organizationHome-->
<template>
  <div
    class="flex flex-col justify-center items-center w-full h-80 md:h-96 lg:h-[480px] bg-white space-y-10 lg:space-y-[60px]"
  >
    <!--一個Input-->
    <div class="w-5/6 h-fit 2xl:h-48 space-y-4 sm:space-y-5">
      <div class="text-left text-xl 2xl:text-3xl font-bold text-[#4B4B4B]">
        賣家搜尋
      </div>
      <div
        class="flex flex-row items-center w-full h-20 sm:h-24 lg:h-28 2xl:h-[130px] border-[0.5px] xl:border-[1px] border-black rounded-lg p-5 2xl:p-6 space-x-6 2xl:space-x-10"
      >
        <home-icon
          class="w-10 sm:w-11 2xl:w-[50px] h-10 sm:h-11 2xl:h-[50px] stroke-[#4B4B4B]"
        ></home-icon>
        <input
          type="text"
          class="w-full px-3 py-3 sm:py-4 lg:py-6 text-base lg:text-lg font-normal text-[#4B4B4B] bg-white border border-solid border-[#F2F2F2] rounded transition ease-in-out m-0 focus:text-[#4B4B4B] focus:bg-white focus:border-[#76448A] focus:outline-none"
          placeholder="EX : 誰說海的味道都是鹹的"
        />
      </div>
    </div>
    <classic-button
      :name="'搜尋'"
      class="w-2/3 lg:w-1/2 2xl:w-5/12 h-16 md:h-20 2xl:h-[100px] rounded-md md:rounded-lg bg-[#9763AB] hover:bg-gradient-to-r hover:from-[#fccb90] hover:to-[#d57eeb] text-white"
    ></classic-button
    ><!--background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);-->
  </div>
</template>

<script>
import classicButton from "@/vues/classic/classicButton.vue";
import homeIcon from "@/vues/icons/homeIcon.vue";

export default {
  components: { classicButton, homeIcon },
  setup() {},
};
</script>
