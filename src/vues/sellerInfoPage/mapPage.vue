<!--Note:BeforeLogin-->
<template>
  <div
    class="relative 2xl:w-full h-96 md:h-[480px] lg:h-[600px] xl:h-[800px] 2xl:h-[1000px] bg-black"
  >
    <!--Goole Map放置處-->
    <img
      class="w-full h-full"
      src="https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    />
    <!-- v-if :permission = 'seller' -->
    <div
      class="absolute right-5 sm:right-6 md:right-7 xl:right-10 bottom-5 sm:bottom-6 md:bottom-7 xl:bottom-10 flex justify-center items-center w-14 sm:w-16 lg:w-20 xl:w-[90px] 2xl:w-[100px] h-14 sm:h-16 lg:h-20 xl:h-[90px] 2xl:h-[100px] bg-[#9763AB] cursor-pointer rounded-md 2xl:rounded-lg"
    >
      <edit-icon
        class="stroke-[#F6F6F6] w-6 lg:w-8 xl:w-10 2xl:w-12 h-6 lg:h-8 xl:h-10 2xl:h-12"
      ></edit-icon>
    </div>
  </div>
</template>

<script>
import editIcon from "@/vues/icons/editIcon.vue";
export default {
  name: "postPage",
  components: { editIcon },
};
</script>
