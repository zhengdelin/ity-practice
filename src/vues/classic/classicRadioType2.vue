<!--Use:signUpPage, cards/consumerAccountInfoCard-->
<template>
  <div class="w-5/6 sm:w-full h-full 2xl:h-48 space-y-4 2xl:space-y-8">
    <div class="text-left text-xl 2xl:text-3xl font-bold text-[#4B4B4B]">
      選擇註冊身分
    </div>
    <ul
      class="items-center w-full h-full sm:h-14 lg:h-16 2xl:h-[100px] px-6 text-base md:text-lg lg:text-xl 2xl:text-2xl font-normal text-[#4B4B4B] bg-white border-2 xl:border-4 border-solid border-[#4B4B4B] sm:border-[#B2415C] rounded-md lg:rounded-lg transition ease-in-out sm:flex"
    >
      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
        <div class="flex items-center pl-3">
          <input
            id="horizontal-list-radio-license"
            type="radio"
            value=""
            name="list-radio"
            class="w-4 lg:w-5 xl:w-6 2xl:w-8 h-4 lg:h-5 xl:h-6 2xl:h-8 bg-gray-100 border-gray-300 cursor-pointer"
          />
          <label
            for="horizontal-list-radio-license"
            class="py-3 ml-2 w-full text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium 2xl:font-semibold text-[#B2415C]"
            >消費者端
          </label>
        </div>
      </li>
      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
        <div class="flex items-center pl-3">
          <input
            id="horizontal-list-radio-id"
            type="radio"
            value=""
            name="list-radio"
            class="w-4 lg:w-5 xl:w-6 2xl:w-8 h-4 lg:h-5 xl:h-6 2xl:h-8 bg-gray-100 border-gray-300 cursor-pointer"
          />
          <label
            for="horizontal-list-radio-id"
            class="py-3 ml-2 w-full text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium 2xl:font-semibold text-[#B2415C]"
            >店家端
          </label>
        </div>
      </li>
      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
        <div class="flex items-center pl-3">
          <input
            id="horizontal-list-radio-millitary"
            type="radio"
            value=""
            name="list-radio"
            class="w-4 lg:w-5 xl:w-6 2xl:w-8 h-4 lg:h-5 xl:h-6 2xl:h-8 bg-gray-100 border-gray-300 cursor-pointer"
          />
          <label
            for="horizontal-list-radio-millitary"
            class="py-3 ml-2 w-full text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium 2xl:font-semibold text-[#B2415C]"
            >組織端
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
