<!--Use:consumerInfo-->
<template>
  <div
    class="flex flex-col items-start justify-between w-full h-fit bg-white rounded-xl shadow-xl px-20 2xl:px-[100px] py-10 2xl:py-[60px] space-y-10"
  >
    <!--title-->
    <div class="font-semibold text-4xl text-[#C4C4C4]">Phone Vertification</div>
    <!--phoneNumber Input-->

    <classic-input-type-2
      v-for="(item, index) in classicInputType2List"
      :key="index"
      :classicInputType2="item"
    >
    </classic-input-type-2>
    <div class="flex justify-center items-center w-full">
      <router-link
        :to="{ name: '' }"
        class="flex items-center justify-center w-5/6"
      >
        <classic-button
          :name="'驗證電話號碼'"
          class="w-full xl:w-5/6 2xl:w-3/4 h-12 lg:h-16 xl:h-24 2xl:h-24 rounded-md bg-[#9763AB] hover:bg-gradient-to-r hover:from-[#fccb90] hover:to-[#d57eeb] text-white"
        ></classic-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import classicInputType2 from "@/vues/classic/classicInputType2.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  components: { classicInputType2, classicButton },
  setup() {
    const classicInputType2List = [{ title: "電話號碼 Phone Number" }];
    return { classicInputType2List };
  },
};
</script>
