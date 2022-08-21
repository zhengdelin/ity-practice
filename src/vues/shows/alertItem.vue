<!--Use:shared/ityConsumerHeader, ityOrganizationHeader-->
<template>
  <div
    class="absolute flex justify-center w-full z-40 top-1/2 -translate-y-1/2"
    v-if="showable"
  >
    <div
      class="p-4 mb-4 bg-red-100 rounded-md w-4/5 sm:w-2/3 lg:w-1/2 2xl:w-1/3"
      w-fullrole="alert"
    >
      <div class="flex items-center">
        <svg
          class="mr-2 w-5 h-5 text-red-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3 class="text-lg font-medium text-red-700">登出確認訊息</h3>
      </div>
      <div class="mt-2 mb-4 text-sm text-red-700">
        {{ alert }}
      </div>
      <div
        class="flex items-center justify-center space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-6"
      >
        <div
          class="cursor-pointer text-red-700 bg-transparent border border-red-700 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-white font-medium rounded text-xs px-14 sm:px-12 lg:px-16 py-2 sm:py-2.5 xl:py-3 text-center"
          aria-label="Close"
          @click="onCancelClick()"
        >
          取消
        </div>
        <div
          class="cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-xs px-14 sm:px-12 lg:px-16 py-2 sm:py-2.5 xl:py-3 mr-2 text-center inline-flex items-center"
          @click="onConfirmClick()"
        >
          登出
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alert: String,
    showable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["onCancelClick", "onConfirmClick"],
  setup(_, { emit }) {
    const onCancelClick = () => {
      emit("onCancelClick");
    };
    const onConfirmClick = () => {
      emit("onConfirmClick");
    };
    return { onCancelClick, onConfirmClick };
  },
};
</script>
