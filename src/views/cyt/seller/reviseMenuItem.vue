<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 lg:space-y-[60px] mb-20 2xl:mb-40"
  >
    <div
      class="flex flex-col justify-center items-center w-full h-40 sm:h-56 xl:h-72 2xl:h-[350px] rounded-lg sm:rounded-xl bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"
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
    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'eachsellerPage' }" class="w-full">
          <classic-button
            :name="'取消'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <classic-button
          :name="'更新菜單品項'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
        ></classic-button>
      </div>
    </div>
  </div>
</template>

<script>
import classicInput from "@/vues/classic/classicInputType1.vue";
import clipboardDocumentIcon from "@/vues/icons/clipboardDocumentIcon.vue";
import descIcon from "@/vues/icons/descIcon.vue";
import priceIcon from "@/vues/icons/priceIcon.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import cameraIcon from "@/vues/icons/cameraIcon.vue";
// import { useRouter } from "vue-router";

export default {
  name: "reviseOrganizationInfo",
  components: {
    classicInput,
    classicButton,
    cameraIcon,
    // clipboardDocumentIcon,
    // descIcon,
    // priceIcon,
  },
  setup() {
    // const router = useRouter();
    const classicInputList = [
      {
        title: "餐點名稱",
        icon: clipboardDocumentIcon,
      },
      {
        title: "餐點敘述",
        icon: descIcon,
      },
      {
        title: "餐點價格",
        icon: priceIcon,
      },
    ];

    // const save = () => {
    //   router.push({ name: "organizationInfo" });
    //   // this.$router.push({ name: "sellerInfo" });
    // };

    return { classicInputList };
  },
};
</script>

<style scoped></style>
