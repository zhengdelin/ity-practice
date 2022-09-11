<!--Use:sellerInfoPage/menuPage-->
<template>
  <div
    class="flex flex-row items-center border-b-4 border-[#BB8FCE] w-full h-56 md:h-80 lg:h-96 2xl:h-[380px] space-x-5 p-10 bg-white drop-shadow-md"
  >
    <!--photo-->
    <div
      class="flex w-1/3 lg:w-4/12 2xl:w-full h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 2xl:h-[300px] overflow-hidden bg-no-repeat bg-cover bg-center"
    >
      <component :is="menuItem.photo" class="w-full h-full" />
    </div>
    <!-- name + desc + price -->
    <div
      class="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 w-2/3 lg:w-8/12 2xl:w-full"
    >
      <div
        class="flex flex-col justify-center w-full 2xl:w-[630px] 2xl:h-[300px] space-y-5 lg:space-y-10 pl-0 lg:pl-10 2xl:pl-20 text-[#4B4B4B]"
      >
        <p
          class="flex text-2xl lg:text-3xl xl:text-4xl font-semibold lg:font-bold text-[#76448A]"
        >
          {{ menuItem.name }}
        </p>
        <p
          class="flex text-sm lg:text-base xl:text-2xl text-left lg:font-medium"
        >
          {{ menuItem.desc }}
        </p>
      </div>
      <div
        class="flex items-center justift-start lg:justify-end w-full 2xl:w-[590px] 2xl:h-[300px] lg:font-semibold text-[#4B4B4B]"
      >
        <p class="text-base lg:text-xl xl:text-3xl">
          商品價格：{{ menuItem.price }} 元
        </p>
      </div>
    </div>
    <!-- v-if :permission = 'seller' -->
    <router-link :to="{ name: 'reviseMenuItem' }">
      <div
        class="absolute right-5 sm:right-4 lg:right-6 xl:right-8 2xl:right-10 top-5 sm:top-4 lg:top-6 xl:top-8 2xl:top-10 flex justify-center items-center w-10 sm:w-14 lg:w-16 2xl:w-20 h-10 sm:h-14 lg:h-16 2xl:h-20 bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <edit-icon
          class="stroke-[#4B4B4B] w-5 sm:w-6 md:w-7 lg:w-8 2xl:w-10 h-5 sm:h-6 md:h-7 lg:h-8 2xl:h-10"
        ></edit-icon>
      </div>
    </router-link>
  </div>
</template>

<script>
import editIcon from "@/vues/icons/editIcon.vue";

export default {
  props: {
    menuItem: { type: Object, default: () => ({}) },
  },
  components: { editIcon },
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
