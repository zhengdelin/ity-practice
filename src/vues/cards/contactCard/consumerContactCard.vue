<template>
  <div
    class="flex flex-col items-center justify-center px-4 py-8 sm:p-0 2xl:px-12 w-full sm:w-5/12 h-60 sm:h-[400px] xl:h-[300px] 2xl:h-80 bg-[#ECECEC] space-y-8 sm:space-y-5 xl:space-y-10"
  >
    <div
      class="flex flex-row sm:flex-col xl:flex-row justify-center 2xl:justify-between items-center w-full space-x-5 sm:space-x-0 xl:space-x-5 sm:space-y-5 lg:space-y-6 xl:space-y-0"
    >
      <!-- 收藏按鈕 -->
      <div
        class="flex justify-center items-center rounded-full w-20 xl:w-[90px] 2xl:w-[100px] h-20 xl:h-[90px] 2xl:h-[100px] bg-[#E25150] cursor-pointer"
      >
        <love-icon
          class="w-6 xl:w-8 2xl:w-9 h-6 xl:h-8 2xl:h-9 stroke-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300"
        ></love-icon>
      </div>
      <!-- 檢舉按鈕 -->
      <div
        class="flex justify-center items-center rounded-full w-20 xl:w-[90px] 2xl:w-[100px] h-20 xl:h-[90px] 2xl:h-[100px] bg-[#9763AB] cursor-pointer"
      >
        <hand-down-icon
          class="w-6 xl:w-8 2xl:w-9 h-6 xl:h-8 2xl:h-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300"
        ></hand-down-icon>
      </div>
      <!-- 撰寫評論按鈕 -->
      <router-link :to="{ name: 'addFeedback' }">
        <div
          class="flex flex-row justify-center items-center border-2 border-[#76448A] w-[200px] sm:w-40 md:w-52 2xl:w-[280px] h-20 sm:h-[60px] xl:h-20 2xl:h-[100px] bg-white hover:bg-[#F9F9F9] space-x-10 rounded-md"
        >
          <div>
            <chat-icon
              class="w-8 sm:w-6 lg:w-8 xl:w-7 2xl:w-8 h-8 sm:h-6 lg:h-8 xl:h-7 2xl:h-8 stroke-[#76448A]"
            ></chat-icon>
          </div>
          <div
            class="font-semibold ext-xl sm:text-base lg:text-xl xl:text-2xl text-[#76448A]"
          >
            撰寫評論
          </div>
        </div>
      </router-link>
    </div>

    <div
      class="flex flex-row items-center justify-center w-4/5 2xl:w-[540px] h-16 2xl:h-20 space-x-8 sm:space-x-6 rounded-xl bg-white hover:bg-gradient-to-r hover:from-[#fad0c4] hover:to-[#fecfef] text-[#76448A] hover:text-[#4B4B4B]"
    >
      <!-- background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%); -->
      <div>
        <phone-icon
          class="sm:w-5 sm:h-5 lg:w-7 lg:h-7 stroke-[#76448A] fill-white"
        ></phone-icon>
      </div>
      <div class="xl:font-medium text-xl sm:text-base lg:text-xl xl:text-2xl">
        {{ tel }}
      </div>
    </div>
  </div>
</template>

<script>
import phoneIcon from "@/vues/icons/phoneIcon.vue";
import loveIcon from "@/vues/icons/loveIcon.vue";
import handDownIcon from "@/vues/icons/handDownIcon.vue";
import chatIcon from "@/vues/icons/chatBubbleIcon.vue";

export default {
  name: "sellerInfo",
  components: {
    phoneIcon,
    loveIcon,
    handDownIcon,
    chatIcon,
  },
  props: {
    tel: String,
  },
};
</script>
