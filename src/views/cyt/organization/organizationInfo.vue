<template>
  <div class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] mb-20 pt-5">
    <div class="flex flex-row justify-between space-x-5 lg:space-x-10">
      <div class="flex flex-col justify-between w-1/4">
        <!-- organizationPic -->
        <div
          class="flex flex-col justify-center items-center w-full h-40 sm:h-56 xl:h-72 2xl:h-[350px] rounded-lg sm:rounded-xl bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]"
        >
          <div
            class="flex w-24 h-24 sm:w-32 sm:h-32 2xl:w-60 2xl:h-60 rounded-full"
          >
            <img
              class="rounded-full"
              src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            />
          </div>
        </div>
        <router-link
          :to="{ name: 'reviseOrganizationInfo' }"
          class="flex justify-center w-full"
        >
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
