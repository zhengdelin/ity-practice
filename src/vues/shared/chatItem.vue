<template>
  <div
    class="fixed flex justify-center items-center left-5 bottom-10 z-50 p-5 w-14 sm:w-16 lg:w-20 2xl:w-[100px] h-14 sm:h-16 lg:h-20 2xl:h-[100px] bg-[#6F6F6F] cursor-pointer rounded-md 2xl:rounded-lg"
  >
    <!--p-2 sm:p-4 bottom-4 sm:bottom-6 right-4 sm:right-6 h-12 w-12 sm:h-20 sm:w-20-->
    <message-Icon></message-Icon>
  </div>
</template>

<script>
import messageIcon from "@/vues/icons/messageIcon.vue";

export default {
  components: {
    messageIcon,
  },
  setup() {},
};
</script>

<style scoped></style>
