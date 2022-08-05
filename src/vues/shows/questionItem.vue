<!--Use:systemFunctionBeforeLogin, consumerSystemFunction, sellerSystemFunction, organizationSystemFunction-->
<template>
  <div
    class="flex flex-col items-center space-y-0 lg:space-y-8 2xl:space-y-10 md:w-1/3"
  >
    <!--questionContent-->
    <div
      class="flex justify-center items-center w-[400px] md:w-fit h-40 2xl:h-[250px] bg-[#F2F2F2] rounded-xl p-6"
    >
      <!--1920/2xl:w-[420px]-->
      <p
        class="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:leading-[60px]"
      >
        {{ questionItem.content }}
      </p>
    </div>
    <!--questionAnimation-->
    <component
      :is="questionItem.animation"
      class="w-60 md:w-[200px] xl:w-56 2xl:w-[380px] h-60 md:h-[200px] xl:h-56 2xl:h-[380px]"
    />
  </div>
</template>

<script>
export default {
  name: "questionItem",
  props: {
    questionItem: { type: Object, default: () => ({}) },
  },
  components: {},
};
</script>

<style scoped></style>
