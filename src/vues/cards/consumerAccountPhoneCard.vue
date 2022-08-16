<template>
  <div
    class="flex flex-col items-start justify-between w-full h-[600px] bg-white rounded-xl shadow-xl px-[100px] py-[60px]"
  >
    <!--title-->
    <div class="text-5xl text-[#4B4B4B] pb-5">Phone Vertification</div>
    <!--phoneNumber Input-->

    <classic-input-type-2
      v-for="(item, index) in classicInputType2List"
      :key="index"
      :classicInputType2="item"
    >
    </classic-input-type-2>
    <div class="flex justify-center items-center w-full bg-black">
      <router-link :to="{ name: '' }" class="w-5/6">
        <classic-button
          :name="'驗證電話號碼'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
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
