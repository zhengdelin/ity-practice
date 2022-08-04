<template>
  <div class="w-full h-72 sm:h-80 lg:h-[380px] xl:h-[400px] bg-[#B983CE]">
    <div class="flex flex-row justify-center pt-8 2xl:pt-12 space-x-10">
      <div
        class="flex justify-center items-center w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 rounded-full bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <facebook-icon></facebook-icon>
      </div>
      <div
        class="flex justify-center items-center w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 rounded-full bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <instagram-Icon></instagram-Icon>
      </div>
      <div
        class="flex justify-center items-center w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 rounded-full bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <twitter-icon></twitter-icon>
      </div>
      <div
        class="flex justify-center items-center w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 rounded-full bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <playstore-Icon></playstore-Icon>
      </div>
    </div>
    <div class="flex justify-center mt-8 lg:mt-10 2xl:mt-14">
      <ity-Footer-logo
        class="w-40 sm:w-60 lg:w-[300px] h-20 sm:h-32 lg:h-40"
      ></ity-Footer-logo>
    </div>
    <!--版權聲明-->
    <div
      class="flex justify-center mt-14 sm:mt-6 xl:mt-12 2xl:mt-5 text-white text-sm sm:text-lg font-medium"
    >
      <p>Copyright © ITY / I 特約 All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import facebookIcon from "@/vues/icons/facebookIcon.vue";
import instagramIcon from "@/vues/icons/instagramIcon.vue";
import twitterIcon from "@/vues/icons/twitterIcon.vue";
import playstoreIcon from "@/vues/icons/playstoreIcon.vue";
import ityFooterLogo from "@/vues/icons/ityFooterLogo.vue";

export default {
  name: "sharedFooter",
  components: {
    facebookIcon,
    instagramIcon,
    twitterIcon,
    playstoreIcon,
    ityFooterLogo,
  },
};
</script>
