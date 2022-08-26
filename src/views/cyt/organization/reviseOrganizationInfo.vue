<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 lg:space-y-[60px] mb-20 2xl:mb-40"
  >
    <div
      class="flex flex-col justify-center items-center w-full h-40 sm:h-56 xl:h-72 2xl:h-[350px] rounded-lg sm:rounded-xl bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')]"
    >
      <div
        class="flex w-24 h-24 sm:w-32 sm:h-32 2xl:w-60 2xl:h-60 rounded-full"
      >
        <!-- <img
          class="rounded-full"
          src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        /> -->
        <label
          for="dropzone-file"
          class="flex justify-center items-center w-full h-full rounded-full cursor-pointer bg-white hover:bg-[#F9F9F9]"
        >
          <camera-icon></camera-icon>

          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>
    </div>
    <classic-input
      v-for="(item, index) in classicInputList"
      :key="index"
      :classicInput="item"
    >
    </classic-input>
    <classic-radio class="py-5 xl:py-10"></classic-radio>
    <div class="flex justify-center w-full">
      <accordion-item :title="'開啟點餐服務應注意事項'"></accordion-item>
    </div>
    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'organizationInfo' }" class="w-full">
          <classic-button
            :name="'返回'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <classic-button
          @click="save"
          :name="'儲存資訊'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
        ></classic-button>
      </div>
    </div>
  </div>
</template>

<script>
import classicInput from "@/vues/classic/classicInputType1.vue";
import identificationIcon from "@/vues/icons/identificationIcon.vue";
import phoneIcon from "@/vues/icons/phoneIcon.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import cameraIcon from "@/vues/icons/cameraIcon.vue";
import { useRouter } from "vue-router";

export default {
  name: "reviseOrganizationInfo",
  components: {
    classicInput,
    classicButton,
    cameraIcon,
    // identificationIcon,
    // phoneIcon,
  },
  setup() {
    const router = useRouter();
    const classicInputList = [
      {
        title: "聯絡人電話",
        icon: identificationIcon,
      },
      {
        title: "聯絡人姓名",
        icon: phoneIcon,
      },
    ];

    const save = () => {
      router.push({ name: "organizationInfo" });
      // this.$router.push({ name: "sellerInfo" });
    };

    return { classicInputList, save };
  },
};
</script>

<style scoped></style>
