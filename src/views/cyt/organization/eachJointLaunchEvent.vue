<template>
  <div
    class="flex justify-start items-center space-x-5 sm:space-x-8 xl:space-x-10"
  >
    <badges-item :content="'國立臺中科技大學學生'"></badges-item>
    <badges-item :content="'資訊管理系學生'"></badges-item>
    <badges-item :content="'必須登入ITY'"></badges-item>
  </div>
  <div
    class="relative flex items-center justify-center px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] w-full h-[200px] md:h-[300px] lg:h-[400px] bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')]"
    style="background-position: 50%"
  >
    <!-- <div class="flex flex-col z-20 space-y-5 md:space-y-7 xl:space-y-10">
        <div
          class="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white"
        >
          購買會員點數 享受獨家功能
        </div>
        <div
          class="flex flex-row items-end space-x-2 md:space-x-3 lg:text-x-6 2xl:space-x-5"
        >
          <div class="text-xl md:text-2xl xl:text-3xl text-white">
            Support ITY
          </div>
          <div class="text-sm md:text-base xl:text-xl text-white">
            Increase your brand exposure
          </div>
        </div>
      </div> -->
    <div
      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-40 z-10"
    ></div>
  </div>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-20 lg:space-y-[100px] xl:space-y-[120px] mb-20 2xl:mb-40 pt-5"
  >
    <div class="flex flex-col space-y-10">
      <!--這個做成component-->
      <div class="flex flex-row h-20 space-x-10 bg-black">
        <div
          class="flex justify-center items-center rounded w-1/6 text-white bg-[#909090]"
        >
          活動標題
        </div>
        <div
          class="flex justify-start items-center w-5/6 pl-10 text-xl bg-[#F9F9F9]"
        >
          蘇坤蔚牛排 X 中科大資訊管理系 資訊人の好康
        </div>
      </div>
      <!--這個做成component-->
      <div class="flex flex-row h-20 space-x-10 bg-black">
        <div
          class="flex justify-center items-center rounded w-1/6 text-white bg-[#909090]"
        >
          活動期間
        </div>
        <div
          class="flex justify-start items-center w-5/6 pl-10 text-xl bg-[#F9F9F9]"
        >
          2022年10月10日(一)17:00 ~ 2022年12月2日(五) 20:00
        </div>
      </div>
      <!--領取優惠券方法-->
      <div
        class="flex flex-col justify-center items-start border border-black text-black w-full h-[150px] space-y-5 px-6"
      >
        <div class="text-2xl">■ 如何領取優惠</div>
        <!-- props傳值地方 -->
        <div class="text-xl">於活動期間內登入，即可直接領取</div>
      </div>
    </div>
    <div class="flex flex-row space-x-10">
      <click-button
        v-for="(item, index) in clickButtonList"
        :key="index"
        :clickButton="item"
      >
      </click-button>
    </div>

    <!-- 舉辦單位區塊-->
    <div>
      <classic-title
        :content="'舉辦單位'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div>
        <div
          class="relative flex items-center justify-center px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] w-full h-[200px] md:h-[300px] lg:h-[400px] bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')]"
          style="background-position: 50%"
        ></div>
      </div>
      <!-- 活動內容區塊-->
      <div>
        <classic-title
          :content="'活動內容'"
          class="w-full bg-[#76448A]"
        ></classic-title>
        <div class="border border-black w-full p-10" v-html="content"></div>
      </div>
      <!-- 詳細資訊區塊-->
      <div>
        <classic-title
          :content="'詳細資訊'"
          class="w-full bg-[#76448A]"
        ></classic-title>
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import badgesItem from "@/vues/shows/badgesItem.vue";
import clickButton from "@/vues/buttons/clickButton.vue";
import { ref } from "vue";

export default {
  name: "eachJointLaunchEvent",
  components: {
    classicTitle,
    badgesItem,
    clickButton,
  },
  setup() {
    const clickButtonList = [
      { title: "舉辦單位" },
      { title: "活動內容" },
      { title: "詳細資訊" },
    ];
    const content = ref();
    content.value =
      '<div class="text-left text-[#2D2D2D] space-y-10 text-lg sm:text-xl"><div class="space-y-2"><p>台中海線必吃美食 #梧棲漁港刺身</p><p>誰說海的味道都是鹹的 / 台中梧棲店</p></div><div class="space-y-6 xl:space-y-2"><p>🌟 超載鮭魚卵控丼丼簡而言之就是一個鮭魚卵滿出來的丼飯，推薦給喜歡鮭魚卵的朋友。新鮮順口的鮭魚卵搭配池上米飯，大口咬下，彷彿在舌尖上開一場嘉年華會!</p><p>🌟 海鮮炙燒丼丼 不太敢吃生的客人可以點炙燒的，食材非常新鮮，不用擔心會過敏；此丼飯份量非常足夠，推薦給食量中上以上的客人。</p><p>給5星好評再多送一份炙燒旗魚握壽司，數量有限，送完為止 心動不如馬上行動，快揪朋友享用CP值爆表的海線刺身美食!也歡迎事先打電話預約</p></div></div>';
    return { clickButtonList, content };
  },
};
</script>

<style scoped></style>
