<template>
  <div
    @click="towardReservation"
    class="fixed flex justify-center items-center right-5 lg:right-10 xl:right-[52px] 2xl:right-[60px] top-1/3 z-50 w-20 sm:w-24 lg:w-28 2xl:w-32 h-20 sm:h-24 lg:h-28 2xl:h-32 bg-[#B2415C] cursor-pointer rounded-full"
  >
    <order-meal-icon
      class="w-10 sm:w-12 lg:w-14 2xl:w-16 h-10 sm:h-12 lg:h-14 2xl:h-16"
    ></order-meal-icon>
  </div>
</template>

<script>
import orderMealIcon from "@/vues/icons/orderMealIcon.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    orderMealIcon,
  },
  setup() {
    const router = useRouter();
    const towardReservation = () => {
      router.push({ name: "reservationPage" });
    };

    return { towardReservation };
  },
};
</script>

<style scoped></style>
