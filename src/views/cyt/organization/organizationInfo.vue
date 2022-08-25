<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <div class="flex flex-row justify-between space-x-5 lg:space-x-10">
      <div class="flex flex-col bg-black w-1/4">
        <!-- organizationPic -->
        <div
          class="flex flex-col justify-center items-center w-full h-40 sm:h-56 xl:h-64 2xl:h-[400px] space-y-2 sm:space-y-4 xl:space-y-6 2xl:space-y-10 rounded-lg sm:rounded-xl bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')]"
        >
          <div
            class="flex w-24 h-24 sm:w-32 sm:h-32 2xl:w-60 2xl:h-60 rounded-full mt-4 lg:mt-6 2xl:mt-10"
          >
            <img
              class="rounded-full"
              src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            />
          </div>
        </div>
        <router-link :to="{ name: '' }" class="flex justify-center w-full">
          <classic-button
            :name="'編輯學生會資訊'"
            class="w-full 2xl:w-[520px] h-16 2xl:h-[84px] rounded-md xl:rounded-xl bg-[#76448A] hover:bg-gradient-to-r hover:from-[#fddb92] hover:to-[#d1fdff] text-white hover:text-[#4B4B4B]"
          ></classic-button>
        </router-link>
      </div>
      <organization-Info-Card
        :organizationName="'國立臺中科技大學'"
        :location="'台中市北區三民路三段129號'"
        :telephone="'0971635338'"
        :representative="'周彥廷'"
        class="bg-[#ECECEC] rounded-lg sm:rounded-xl 2xl:h-[480px]"
      ></organization-Info-Card>
    </div>
  </div>
</template>

<script>
import organizationInfoCard from "@/vues/cards/organizationInfoCard.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "eachOrganizationInfo",
  components: {
    organizationInfoCard,
    classicButton,
  },
};
</script>

<style scoped></style>
