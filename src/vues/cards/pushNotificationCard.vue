<template>
  <div
    class="flex flex-col w-5/6 md:w-1/2 h-60 sm:h-64 lg:h-72 xl:h-80 2xl:h-[400px] bg-gradient-to-r from-[#a8edea] to-[#fed6e3] p-6 lg:p-10 space-y-2 lg:space-y-5"
  >
    <div
      class="h-1/12 sm:h-1/6 text-[#6F6F6F] text-left text-xl lg:text-2xl xl:text-3xl font-semibold"
    >
      特約邀請
    </div>
    <div
      class="flex flex-row h-11/12 sm:h-5/6 space-x-5 lg:space-x-6 2xl:space-x-5"
    >
      <!--組織照片-->
      <div class="flex items-center 2xl:items-start justify-center w-1/3">
        <div
          class="relative w-32 sm:w-36 md:w-28 lg:w-32 xl:w-40 2xl:w-[200px] h-32 sm:h-36 md:h-28 lg:h-32 xl:h-40 2xl:h-[200px] overflow-hidden bg-no-repeat bg-cover bg-center"
        >
          <component
            :is="notificationCard.avater"
            class="w-full h-full rounded-full"
          />
          <div
            class="absolute bottom-0 right-0 flex items-center justify-center w-12 lg:w-[60px] h-12 lg:h-[60px] bg-[#9763AB] rounded-full cursor-pointer"
          >
            <router-link :to="{ name: '' }">
              <chat-icon
                class="w-5 sm:w-6 2xl:w-7 h-5 sm:h-6 2xl:h-7"
              ></chat-icon
            ></router-link>
          </div>
        </div>
      </div>
      <!--組織名稱-->
      <div
        class="flex flex-col justify-between items-center w-2/3 space-y-4 sm:space-y-0"
      >
        <p class="text-xl lg:texxt-2xl xl:text-3xl font-bold">
          {{ notificationCard.organizationName }}
        </p>
        <p class="text-base lg:text-lg font-medium text-[#4B4B4B]">
          溫馨小提醒 : 組織端特約邀請已送出 ! 煩請您盡快回覆
        </p>
        <div
          class="flex flex-row space-x-5 md:space-x-7 lg:space-x-5 2xl:space-x-6"
        >
          <router-link :to="{ name: '' }" class="w-full">
            <classic-button
              :name="'接受'"
              class="w-20 lg:w-24 2xl:w-40 h-12 2xl:h-[60px] bg-gradient-to-r from-[#8989ba] to-[#8989ba] text-white rounded sm:rounded-lg"
            ></classic-button>
          </router-link>
          <router-link :to="{ name: '' }" class="w-full">
            <classic-button
              :name="'婉拒'"
              class="w-20 lg:w-24 2xl:w-40 h-12 2xl:h-[60px] bg-white text-[#2D2D2D] rounded sm:rounded-lg"
            ></classic-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chatIcon from "@/vues/icons/chatIcon.vue";
import classicButton from "@/vues/classic/classicButton.vue";
export default {
  props: {
    notificationCard: { type: Object, default: () => ({}) },
  },
  components: {
    chatIcon,
    classicButton,
  },
  setup() {},
};
</script>
