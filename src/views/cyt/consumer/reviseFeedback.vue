<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-[100px] mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <!-- 修改評分區塊 -->
    <div class="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-[60px]">
      <classic-title
        :content="'修改評分'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div>
        <classic-select-input></classic-select-input>
      </div>
    </div>

    <!-- 修改評分內容區塊 -->
    <div class="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-[60px]">
      <classic-title
        :content="'修改評分內容'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div>
        <tinymce-editor v-model:content="feedbackContent"></tinymce-editor>
      </div>
    </div>

    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'eachsellerPage' }" class="w-full">
          <classic-button
            :name="'返回'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <classic-button
          :name="'修改評論'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
        ></classic-button>
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import classicSelectInput from "@/vues/classic/classicSelectInput.vue";
import tinymceEditor from "@/vues/shared/tinymceEditor.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import { ref } from "vue";

export default {
  name: "reviseFeedbackPage",
  components: {
    classicTitle,
    classicSelectInput,
    tinymceEditor,
    classicButton,
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
