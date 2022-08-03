<template>
  <h3 class="text-lg font-medium text-gray-900">是否開啟點餐服務</h3>
  <ul class="grid gap-6 w-full md:grid-cols-2">
    <li>
      <input
        type="radio"
        id="hosting-small"
        name="hosting"
        value="hosting-small"
        class="hidden peer"
        required=""
      />
      <label
        for="hosting-small"
        class="inline-flex justify-center items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
      >
        <div class="block">
          <div class="w-full text-lg font-semibold">是</div>
          <div class="w-full">請詳閱下方「開啟點餐服務應注意事項」之內容</div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="radio"
        id="hosting-big"
        name="hosting"
        value="hosting-big"
        class="hidden peer"
      />
      <label
        for="hosting-big"
        class="inline-flex justify-center items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
      >
        <div class="block">
          <div class="w-full text-lg font-semibold">否</div>
          <div class="w-full">點選否並不會影響系統營運狀況，敬請放心</div>
        </div>
      </label>
    </li>
  </ul>
</template>
