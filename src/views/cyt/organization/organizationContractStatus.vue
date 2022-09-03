<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-40 mt-5 lg:mt-10 mb-20 2xl:mb-40"
  >
    <div class="space-y-5 sm:space-y-8 lg:space-y-10 2xl:space-y-[60px]">
      <classic-title
        :content="'我的特約狀態'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div class="relative">
        <div class="absolute top-0 right-0">
          <router-link
            :to="{ name: 'organizationSignedContract' }"
            class="w-full"
          >
            <classic-button
              :name="'新增特約店家邀請'"
              class="border-[1.5px] hover:border-none border-[#2D2D2D] w-40 sm:w-44 md:w-48 lg:w-52 xl:w-[400px] h-10 sm:h-[45px] md:h-[50px] lg:h-[60px] xl:h-24 2xl:h-[100px] rounded lg:rounded-lg 2xl:rounded-xl bg-[#F9F9F9] hover:bg-gradient-to-r hover:from-[#fddb92] hover:to-[#d1fdff] text-black"
            ></classic-button>
            <!-- background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%); -->
          </router-link>
        </div>
      </div>
      <!-- 此區塊為特約狀況為空時才出現 -->
      <div class="py-2 xl:py-4 space-y-5 lg:space-y-10">
        <div>
          <Vue3Lottie
            :animationData="emptyStateJSON"
            class="w-60 lg:w-80 2xl:w-[400px] h-60 lg:h-80 2xl:h-[400px]"
          />
        </div>
        <div
          class="font-semibold text-xl lg:text-2xl xl:text-3xl text-[#76448A]"
        >
          目前尚未與任何店家合作簽署特約，趕快發送邀請吧!
        </div>
      </div>
      <!--table--><!-- pt-40之後要移掉 -->
      <div class="overflow-x-auto relative pt-40">
        <table
          class="w-full text-sm sm:text-lg xl:text-xl 2xl:text-2xl text-left text-gray-500"
        >
          <thead
            class="text-xs sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-700 bg-gray-50"
          >
            <tr>
              <th
                scope="col"
                class="px-6 md:px-10 py-3 md:py-8 xl:py-10 font-semibold sm:font-bold"
              >
                欲簽約特約店家
              </th>
              <th
                scope="col"
                class="px-6 md:px-10 py-3 md:py-8 xl:py-10 font-semibold sm:font-bold"
              >
                組織端邀請發送狀態
              </th>
              <th
                scope="col"
                class="px-6 md:px-10 py-3 md:py-8 xl:py-10 font-semibold sm:font-bold"
              >
                店家端簽約狀態
              </th>
              <th
                scope="col"
                class="px-6 md:px-10 py-3 md:py-8 xl:py-10 font-semibold sm:font-bold"
              >
                組織端簽約確認狀態
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <td
                class="px-6 md:px-10 py-4 md:py-10 font-medium sm:font-semibold"
              >
                { 特約店家名稱 }
              </td>
              <td
                class="px-6 md:px-10 py-4 md:py-10 xl:py-14 font-medium sm:font-semibold"
              >
                { 狀態 } 已發送邀請
              </td>
              <td
                class="px-6 md:px-10 py-4 md:py-10 xl:py-14 font-medium sm:font-semibold"
              >
                { 狀態 } 已確認簽約
              </td>
              <td
                class="flex flex-row items-center px-6 md:px-10 py-4 md:py-10 xl:py-14 font-medium sm:font-semibold space-x-4 xl:space-x-8"
              >
                <div>{ 狀態 } 尚未確認簽約</div>
                <router-link
                  :to="{ name: 'organizationConfirmContract' }"
                  class=""
                >
                  <edit-icon></edit-icon>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import editIcon from "@/vues/icons/editIcon.vue";
/*Lottiefiles*/
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import emptyStateJSON from "@/vues/json/empty-state-notifications.json";

export default {
  name: "organizationContractStatus",
  components: {
    Vue3Lottie,
    classicTitle,
    classicButton,
    editIcon,
  },
  setup() {
    return { emptyStateJSON };
  },
};
</script>
