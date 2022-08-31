<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-40 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <!--方法一-->
    <div class="space-y-6 sm:space-y-8 lg:space-y-10 2xl:space-y-[60px]">
      <classic-title
        :content="'方法一：自行上傳合約PDF'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div class="flex flex-col justify-center items-center space-y-[100px]">
        <!--Download File-->
        <div
          class="w-5/6 md:w-3/4 lg:w-4/5 2xl:w-[1080px] h-40 sm:h-56 md:h-64 lg:h-72 xl:h-[400px] rounded-lg border-2 border-[#76448A] border-solid cursor-pointer"
        ></div>
        <div class="flex flex-row w-4/5 space-x-10">
          <router-link
            :to="{ name: 'organizationContractStatus' }"
            class="w-full"
          >
            <classic-button
              :name="'返回'"
              class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
            ></classic-button>
          </router-link>
          <router-link :to="{ name: '' }" class="w-full">
            <classic-button
              :name="'上傳契約書'"
              class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
            ></classic-button>
          </router-link>
        </div>
      </div>
    </div>
    <!--方法二-->
    <div class="space-y-5 sm:space-y-8 lg:space-y-10 2xl:space-y-[60px]">
      <classic-title
        :content="'方法二：使用線上編輯器簽署合約'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div class="relative bg-[#F2F2F2] p-5 sm:p-10">
        <div v-html="content"></div>
        <div
          class="absolute top-3 sm:top-5 xl:top-6 2xl:top-8 right-3 sm:right-5 xl:right-8 2xl:right-10"
        >
          <router-link
            :to="{ name: 'organizationEditOnlineContract' }"
            class="w-full"
          >
            <classic-button
              :name="'編輯線上合約'"
              class="w-32 sm:w-36 md:w-40 lg:w-48 xl:w-60 h-10 sm:h-[45px] md:h-[50px] lg:h-[60px] xl:h-24 2xl:h-[100px] rounded lg:rounded-lg 2xl:rounded-xl bg-[#76448A] hover:bg-gradient-to-r hover:from-[#fccb90] hover:to-[#d57eeb] text-white"
            ></classic-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import { ref } from "vue";

export default {
  name: "organizationSignedContract",
  components: {
    classicTitle,
    classicButton,
  },
  setup() {
    const content = ref();
    content.value =
      '<div class="text-left text-base sm:text-xl space-y-6 leading-7 sm:leading-9 md:leading-10"><div><p>國立臺中科技大學 特約商店合約書</p><p>國立臺中科技大學 學生會（以下簡稱甲方）</p><p>誰說海的味道都是鹹的（以下簡稱乙方）</p></div><p> 雙方同意建立特約關係，約定條款如下： <br> 第一條 甲方學校之學生至乙方消費，於消費時出示學生證，即可享有乙方提供之優惠方案。<br> 第二條 甲方為使學生廣知，得將與乙方特約資訊刊登於社群媒體(FB、IG)。 <br> 第三條 甲方會給予乙方一張特約商家貼紙，乙方需將該貼紙張貼於店家或結帳明顯之處。<br> 第四條 乙方履約應本誠信原則，不得提供低於市價之次級產品供甲方學校之學生消費，以及不得有提高售價在打折之情形，若經查屬實，甲方保留法律追述權。<br> 第五條 乙方若有下列情形之一者，甲方得通知限期改善，逾期仍不改善得終止合約：<br></p><div class="list-decimal"><li>違反第四條情形者。</li><li>未能依約履行優惠時。</li><li>其他有重大違約之情形。</li></div><p> 第六條 優惠商店提供之優惠期間自即日起至 112 年 07 月 20 日止，期滿後若甲乙雙方未表示終止合約，則本合約視同自動續約一年。<br> 第七條 本合約未盡事宜，經雙方同意，得以書面變更之。<br> 第八條 本合約書一式兩份，甲乙雙方各執壹份為憑，簽章後生效。 <br></p><p>立合約書人：</p><div><p>甲方：國立臺中科技大學 學生會</p><p>授權代理人(簽章)：周彥廷</p><p>地 址：台中市北區三民路三段129號</p><p>電 話：0971-635-338</p></div><div><p>乙方：</p><p>負責人(簽章)：</p><p>統一編號：</p><p>地址：</p><p>電話：</p><p>中華民國 年 月 日</p></div></div>';
    return { content };
  },
};
</script>
