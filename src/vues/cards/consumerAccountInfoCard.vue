<!--Use:consumerInfo-->
<template>
  <div
    class="flex flex-col items-start justify-between w-full h-fit bg-white rounded-xl shadow-xl px-20 2xl:px-[100px] py-10 2xl:py-[60px] space-y-10"
  >
    <!--title-->
    <div class="font-semibold text-4xl text-[#C4C4C4]">Profile</div>
    <!--Name Input-->

    <classic-input-type-2
      v-for="(item, index) in classicInputType2List"
      :key="index"
      :classicInputType2="item"
    >
    </classic-input-type-2>
    <classic-radio-type-2></classic-radio-type-2>
    <!--datetime-->
    <div class="w-5/6 sm:w-full space-y-4 2xl:space-y-8">
      <div class="text-left text-xl 2xl:text-3xl font-bold text-[#4B4B4B]">
        生日 birthday
      </div>
      <form action="">
        <!-- <label for="birthdaytime">Birthday (date and time):</label> -->
        <input
          type="datetime-local"
          id="birthdaytime"
          name="birthdaytime"
          class="w-full h-16 sm:h-14 lg:h-16 2xl:h-[100px] px-6 text-base md:text-lg lg:text-xl 2xl:text-2xl font-normal text-[#4B4B4B] bg-white border-2 xl:border-[3px] border-solid border-[#4B4B4B] rounded-md lg:rounded-lg transition ease-in-out m-0 focus:text-[#76448A] focus:bg-white focus:border-[#76448A] focus:outline-none cursor-pointer"
        />
      </form>
    </div>
    <div class="flex justify-center items-center w-full">
      <classic-button
        @click="save"
        :name="'儲存'"
        class="w-full xl:w-5/6 2xl:w-3/4 h-12 lg:h-16 xl:h-24 2xl:h-24 rounded-md bg-[#9763AB] hover:bg-gradient-to-r hover:from-[#fccb90] hover:to-[#d57eeb] text-white"
      ></classic-button>
    </div>
  </div>
</template>

<script>
import classicInputType2 from "@/vues/classic/classicInputType2.vue";
import classicRadioType2 from "@/vues/classic/classicRadioType2.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import { useRouter } from "vue-router";

export default {
  components: { classicInputType2, classicRadioType2, classicButton },
  setup() {
    const router = useRouter();
    const classicInputType2List = [{ title: "電話號碼 Phone Number" }];
    const save = () => {
      router.push({ name: "consumerInfo" });
    };
    return { classicInputType2List, save };
  },
};
</script>
