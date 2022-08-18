<template>
  <div
    class="flex flex-row justify-end px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-x-10 mb-20 2xl:mb-40"
  >
    <div
      class="fixed top-1/4 left-10 2xl:left-[140px] flex flex-col items-center w-32 sm:w-48 md:w-52 lg:w-64 xl:w-80 2xl:w-[380px] h-fit"
    >
      <router-link
        :to="{ name: '' }"
        class="flex items-center justify-center w-full"
      >
        <div
          class="w-full text-base xl:text-xl 2xl:text-2xl font-semibold text-[#76448A] py-5 md:py-6 lg:py-8 bg-[#F9F9F9] hover:bg-gradient-to-r hover:from-[#E3FDF5] hover:to-[#FFE6FA] hover:text-[#4B4B4B]"
          @click="goToPhoneCard"
        >
          Phone Vertification
        </div>
      </router-link>
      <router-link
        :to="{ name: '' }"
        class="flex items-center justify-center w-full"
        ><!--background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);-->
        <div
          class="w-full text-base xl:text-xl 2xl:text-2xl font-semibold text-[#76448A] py-5 md:py-6 lg:py-8 bg-[#F9F9F9] hover:bg-gradient-to-r hover:from-[#E3FDF5] hover:to-[#FFE6FA] hover:text-[#4B4B4B]"
          @click="goToInfoCard"
        >
          Profile
        </div>
      </router-link>
    </div>
    <div class="w-full md:w-3/4 pt-10">
      <div class="space-y-10 xl:space-y-12 2xl:space-y-[120px]">
        <phone-card></phone-card>
        <info-card></info-card>
      </div>
    </div>
  </div>
</template>

<script>
import phoneCard from "@/vues/cards/consumerAccountPhoneCard.vue";
import infoCard from "@/vues/cards/consumerAccountInfoCard.vue";

export default {
  name: "consumerInfoPage",
  components: { phoneCard, infoCard },
  setup() {
    const goToPhoneCard = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const goToInfoCard = () => {
      window.scrollTo({ top: 800, behavior: "smooth" });
    };
    return { goToPhoneCard, goToInfoCard };
  },
};
</script>
