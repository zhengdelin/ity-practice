<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-40 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <div class="space-y-5 sm:space-y-8 lg:space-y-10 2xl:space-y-[60px]">
      <classic-title
        :content="'我的特約狀態'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <!--table-->
      <div class="overflow-x-auto relative">
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
                發出邀請組織
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
                { 組織名稱 }
              </td>
              <td
                class="px-6 md:px-10 py-4 md:py-10 xl:py-14 font-medium sm:font-semibold"
              >
                { 狀態 }
              </td>
              <td
                class="px-6 md:px-10 py-4 md:py-10 xl:py-14 font-medium sm:font-semibold"
              >
                { 狀態 }
              </td>
              <td
                class="px-6 md:px-10 py-4 md:py-10 xl:py-14 font-medium sm:font-semibold"
              >
                { 狀態 }
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

export default {
  name: "contractStatus",
  components: {
    classicTitle,
  },
  setup() {},
};
</script>
