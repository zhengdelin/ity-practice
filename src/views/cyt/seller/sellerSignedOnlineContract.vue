<template>
  <seller-banners></seller-banners>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-40 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <div class="space-y-5 sm:space-y-8 lg:space-y-10 2xl:space-y-[60px]">
      <classic-title
        :content="'線上合約'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div class="relative bg-[#F2F2F2] p-5 sm:p-10">
        <contract-template
          :orgnaizationName="'國立臺中科技大學'"
          :seller="'誰說海的味道都是鹹的'"
          :studentAssociationPresident="'周彥廷'"
          :organizationLocation="'台中市北區三民路三段129號'"
          :studentTele="'0971-635-338'"
        ></contract-template>
      </div>
      <div class="flex justify-center w-full">
        <div class="flex flex-row w-4/5 space-x-10">
          <router-link :to="{ name: 'sellerSignedContract' }" class="w-full">
            <classic-button
              :name="'返回'"
              class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
            ></classic-button>
          </router-link>
          <router-link :to="{ name: 'sellerContractStatus' }" class="w-full">
            <classic-button
              :name="'確定簽署'"
              class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
            ></classic-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sellerBanners from "@/vues/shows/sellerBanners.vue";
import classicTitle from "@/vues/classic/classicTitle.vue";
import contractTemplate from "@/vues/shows/contractTemplate.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "onlineContract",
  components: {
    sellerBanners,
    classicTitle,
    contractTemplate,
    classicButton,
  },
  setup() {},
};
</script>
