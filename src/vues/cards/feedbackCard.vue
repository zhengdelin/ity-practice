<!--sellerInfoPage/feedbackPage-->
<template>
  <div class="relative w-full h-fit shadow-xl bg-white">
    <!-- v-if :permission = 'seller' -->
    <!-- <div
      class="absolute right-6 xl:right-10 2xl:right-[100px] top-10 lg:top-14 2xl:top-20 flex justify-center items-center w-10 sm:w-14 lg:w-16 2xl:w-20 h-10 sm:h-14 lg:h-16 2xl:h-20 bg-white hover:bg-[#F9F9F9] cursor-pointer"
    >
      <exclamationTriangle-icon
        class="stroke-[#4B4B4B] w-5 md:w-6 xl:w-8 2xl:w-10 h-5 md:h-6 xl:h-8 2xl:h-10"
      ></exclamationTriangle-icon>
    </div> -->
    <!-- v-if :permission = 'consumer' -->
    <router-link :to="{ name: 'reviseFeedback' }">
      <div
        class="absolute right-6 xl:right-10 2xl:right-[100px] top-10 lg:top-14 2xl:top-20 flex justify-center items-center w-10 sm:w-14 lg:w-16 2xl:w-20 h-10 sm:h-14 lg:h-16 2xl:h-20 bg-white hover:bg-[#F9F9F9] cursor-pointer"
      >
        <edit-icon
          class="stroke-[#4B4B4B] w-5 md:w-6 xl:w-8 2xl:w-10 h-5 md:h-6 xl:h-8 2xl:h-10"
        ></edit-icon>
      </div>
    </router-link>
    <!-- v-if :permission = 'consumer' -->
    <div
      class="absolute right-6 xl:right-10 2xl:right-[100px] top-28 sm:top-32 lg:top-44 xl:top-48 2xl:top-56 flex justify-center items-center w-10 sm:w-14 lg:w-16 2xl:w-20 h-10 sm:h-14 lg:h-16 2xl:h-20 bg-white hover:bg-[#F9F9F9] cursor-pointer"
    >
      <trash-icon
        class="stroke-[#4B4B4B] w-5 md:w-6 xl:w-8 2xl:w-10 h-5 md:h-6 xl:h-8 2xl:h-10"
      ></trash-icon>
    </div>
    <div
      class="flex flex-row items-center w-full h-48 sm:h-56 lg:h-80 2xl:h-[400px] pl-6 sm:pl-10 lg:pl-20 pr-4 space-x-10 sm:space-x-14 lg:space-x-20 xl:space-x-32"
    >
      <div
        class="flex w-32 md:w-48 lg:w-[250px] h-32 md:h-48 lg:h-[250px] rounded-full overflow-hidden bg-no-repeat bg-cover bg-black"
      >
        <img
          class="w-full h-full"
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        />
      </div>
      <div class="flex flex-col space-y-10">
        <p class="flex text-4xl lg:text-6xl text-[#76448A] font-bold">
          {{ feedbackCard.critic }}
        </p>
        <div class="flex flex-row text-lg sm:text-xl lg:text-3xl font-semibold">
          <p class="flex">{{ feedbackCard.gender }}</p>
          <div class="flex">&nbsp;&nbsp;/&nbsp;&nbsp;</div>
          <p class="flex">{{ feedbackCard.school }}</p>
        </div>
      </div>
    </div>
    <!-- rating-item -->
    <div
      class="flex flex-row items-center w-full h-28 lg:h-40 2xl:h-[220px] p-12 lg:p-16 bg-[#F9F9F9]"
    >
      <div
        class="flex justify-center border-[3px] lg:border-4 border-solid border-[#AE2519] w-4/12 sm:w-5/12 2xl:w-[595px] h-16 lg:h-20 2xl:h-[100px]"
      >
        <p
          class="flex items-center text-xl sm:text-2xl lg:text-3xl font-semibold text-[#AE2519]"
        >
          店家評價
        </p>
      </div>
      <div
        class="flex items-center justify-center border-t-[3px] border-r-[3px] border-b-[3px] lg:border-t-4 lg:border-r-4 lg:border-b-4 border-solid border-[#AE2519] w-8/12 sm:w-7/12 2xl:w-[915px] h-16 lg:h-20 2xl:h-[100px] space-x-2 lg:space-x-5"
      >
        <star-icon
          class="w-[28px] sm:w-10 lg:w-[50px] h-[28px] sm:h-10 lg:h-[50px]"
        ></star-icon>
        <star-icon
          class="w-[28px] sm:w-10 lg:w-[50px] h-[28px] sm:h-10 lg:h-[50px]"
        ></star-icon>
        <star-icon
          class="w-[28px] sm:w-10 lg:w-[50px] h-[28px] sm:h-10 lg:h-[50px]"
        ></star-icon>
        <star-icon
          class="w-[28px] sm:w-10 lg:w-[50px] h-[28px] sm:h-10 lg:h-[50px]"
        ></star-icon>
      </div>
    </div>
    <!-- feedback-content -->
    <div class="w-full h-fit bg-[#F6DEF6]">
      <div v-html="feedbackContent"></div>
    </div>
  </div>
</template>

<script>
// import exclamationTriangleIcon from "@/vues/icons/exclamationTriangleIcon.vue";
import editIcon from "@/vues/icons/editIcon.vue";
import trashIcon from "@/vues/icons/trashIcon.vue";
import starIcon from "@/vues/icons/starIcon.vue";
import { ref } from "vue";

export default {
  props: {
    feedbackCard: { type: Object, default: () => ({}) },
  },
  components: {
    // exclamationTriangleIcon,
    editIcon,
    trashIcon,
    starIcon,
  },
  setup() {
    const feedbackContent = ref();
    feedbackContent.value =
      '<p class="text-sm lg:text-xl 2xl:text-2xl text-left leading-loose lg:leading-[60px] 2xl:leading-[80px] p-8 lg:p-12 2xl:p-16">雪のため迂回した道で遭遇。飛び込み入店。古民家をカフェに。ボサノバが流れる店内には、窓からの日差しが差し込むのが絵になる、なかなか落ち着ける店。4種のカレーの中からグリーンカレーとチコリ珈琲を注文。美味し。ただ辛さが欲しい。グリーンカレーなんだもん。スプーンは小降りで、そのくせ具の筍のカットがでかいこと。チコリ珈琲なるもの、初めて飲んだ。ジャズの発祥の地ニューオリンズと聞いては頼まないわけにはいかない。ちょっと甘みを感じる珈琲に似た飲み物と認識した。夜また来たいものである。</p><div class="flex flex-row justify-between items-center space-x-4 lg:space-x-10"><div class="w-28 sm:w-40 lg:w-60 xl:w-80 2xl:w-[380px] h-28 sm:h-40 lg:h-60 xl:h-80 2xl:h-[380px] overflow-hidden bg-no-repeat bg-cover bg-white"><img class="h-full w-full" src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"/></div><div class="w-28 sm:w-40 lg:w-60 xl:w-80 2xl:w-[380px] h-28 sm:h-40 lg:h-60 xl:h-80 2xl:h-[380px] overflow-hidden bg-no-repeat bg-cover bg-white"><img class="h-full w-full" src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"/></div><div class="w-28 sm:w-40 lg:w-60 xl:w-80 2xl:w-[380px] h-28 sm:h-40 lg:h-60 xl:h-80 2xl:h-[380px] overflow-hidden bg-no-repeat bg-cover bg-white"><img class="h-full w-full" src="https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/></div><div class="w-28 sm:w-40 lg:w-60 xl:w-80 2xl:w-[380px] h-28 sm:h-40 lg:h-60 xl:h-80 2xl:h-[380px] overflow-hidden bg-no-repeat bg-cover bg-white"><img class="h-full w-full" src="https://images.unsplash.com/photo-1607301406259-dfb186e15de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80"/></div></div>';
    return { feedbackContent };
  },
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
