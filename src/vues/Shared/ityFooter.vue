<template>
  <div class="w-full h-[400px] bg-[#B983CE]">
    <div class="flex flex-row justify-center pt-12 space-x-10">
      <div
        class="flex justify-center items-center w-20 h-20 rounded-full bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <facebook-icon></facebook-icon>
      </div>
      <div
        class="flex justify-center items-center w-20 h-20 rounded-full bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <instagram-Icon></instagram-Icon>
      </div>
      <div
        class="flex justify-center items-center w-20 h-20 rounded-full bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <twitter-icon></twitter-icon>
      </div>
      <div
        class="flex justify-center items-center w-20 h-20 rounded-full bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <playstore-Icon></playstore-Icon>
      </div>
    </div>
    <div class="flex justify-center mt-16">
      <ity-Footer-logo></ity-Footer-logo>
    </div>
    <!--版權聲明-->
    <div class="flex justify-center mt-8 text-white">
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
    facebookIcon: facebookIcon,
    instagramIcon: instagramIcon,
    twitterIcon: twitterIcon,
    playstoreIcon: playstoreIcon,
    ityFooterLogo: ityFooterLogo,
  },
};
</script>
