<template>
  <seller-banners></seller-banners>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-40 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <!--方法一-->
    <div class="space-y-6 sm:space-y-8 lg:space-y-10 2xl:space-y-[60px]">
      <classic-title
        :content="'方法一 / 下載簽約店家上傳之合約書'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div class="flex justify-center">
        <!--Download File-->
        <div
          class="w-5/6 md:w-3/4 lg:w-4/5 2xl:w-[1080px] h-40 sm:h-56 md:h-64 lg:h-72 xl:h-[400px] rounded-lg border-2 border-[#76448A] border-solid cursor-pointer"
        ></div>
      </div>
    </div>
    <!--方法二-->
    <div class="space-y-5 sm:space-y-8 lg:space-y-10 2xl:space-y-[60px]">
      <classic-title
        :content="'方法二 / 線上簽署合約'"
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
        <div
          class="absolute top-3 sm:top-5 xl:top-8 2xl:top-10 right-3 sm:right-5 xl:right-8 2xl:right-10"
        >
          <router-link :to="{ name: '' }" class="w-full">
            <classic-button
              :name="'編輯線上合約'"
              class="w-32 sm:w-36 md:w-40 lg:w-48 xl:w-60 h-10 sm:h-[45px] md:h-[50px] lg:h-[60px] xl:h-24 2xl:h-[100px] rounded lg:rounded-lg 2xl:rounded-xl bg-[#76448A] hover:bg-gradient-to-r hover:from-[#7DE2FC] hover:to-[#B9B6E5] text-white"
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
  name: "signedContract",
  components: {
    sellerBanners,
    classicTitle,
    contractTemplate,
    classicButton,
  },
  setup() {},
};
</script>
