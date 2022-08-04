<template>
  <div
    @click="backTop"
    class="fixed flex justify-center items-center right-5 bottom-10 z-50 p-5 w-14 sm:w-16 lg:w-20 2xl:w-[100px] h-14 sm:h-16 lg:h-20 2xl:h-[100px] bg-[#B2415C] cursor-pointer"
  >
    <!--p-2 sm:p-4 bottom-4 sm:bottom-6 right-4 sm:right-6 h-12 w-12 sm:h-20 sm:w-20-->
    <back-To-Top-Icon></back-To-Top-Icon>
  </div>
</template>

<script>
import backToTopIcon from "@/vues/icons/backToTopIcon.vue";
export default {
  components: {
    backToTopIcon,
  },
  setup() {
    const backTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return { backTop };
  },
};
</script>

<style scoped></style>
