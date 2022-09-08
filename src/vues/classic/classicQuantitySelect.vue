<template>
  <div
    class="flex flex-row items-center border-b-4 border-[#BB8FCE] w-full h-72 md:h-80 lg:h-96 2xl:h-[380px] space-x-5 p-10 bg-white drop-shadow-md"
  >
    <!--photo-->
    <div
      class="flex w-1/3 lg:w-4/12 2xl:w-full h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 2xl:h-[300px] overflow-hidden bg-no-repeat bg-cover bg-center"
    >
      <component :is="classicQuantitySelect.photo" class="w-full h-full" />
    </div>
    <div
      class="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 w-2/3 lg:w-8/12 2xl:w-full"
    >
      <!-- name + desc -->
      <div
        class="flex flex-col justify-center w-full 2xl:w-[630px] 2xl:h-[300px] space-y-5 lg:space-y-10 pl-0 lg:pl-10 2xl:pl-20 text-[#4B4B4B]"
      >
        <p
          class="flex text-2xl lg:text-3xl xl:text-4xl font-semibold lg:font-bold text-[#76448A]"
        >
          {{ classicQuantitySelect.name }}
        </p>
        <p
          class="flex text-sm lg:text-base xl:text-2xl text-left lg:font-medium"
        >
          {{ classicQuantitySelect.desc }}
        </p>
      </div>
      <!-- price + selector -->
      <div
        class="flex flex-col justify-center items-center w-full 2xl:w-[590px] 2xl:h-[300px] space-y-5 lg:space-y-10 2xl:space-y-20 pl-0 lg:pl-10 2xl:pl-20 lg:font-semibold text-[#4B4B4B]"
      >
        <p class="text-base lg:text-xl xl:text-3xl">
          商品價格：{{ classicQuantitySelect.price }} 元
        </p>
        <div
          class="flex flex-row justify-center items-center w-4/5 md:w-2/3 lg:w-full 2xl:w-4/5"
        >
          <!-- reduce -->
          <div
            @click="btnReduce"
            class="flex justify-center items-center border-l-[3px] xl:border-l-4 border-t-[3px] xl:border-t-4 border-b-[3px] xl:border-b-4 rounded-l-lg border-[#9763AB] w-20 sm:w-28 xl:w-40 h-12 md:h-14 lg:h-16 2xl:h-[90px] cursor-pointer hover:bg-[#F9F9F9]"
          >
            <minus-icon
              class="w-5 sm:w-6 xl:w-7 2xl:w-8 h-5 sm:h-6 xl:h-7 2xl:h-8"
            ></minus-icon>
          </div>
          <div>
            <input
              type="text"
              class="border-[3px] xl:border-4 border-[#9763AB] w-full h-12 md:h-14 lg:h-16 2xl:h-[90px] text-center text-xl lg:text-2xl 2xl:text-3xl"
              v-model="orderQuantity.count"
            />
          </div>
          <!-- increase -->
          <div
            @click="btnIcrease"
            class="flex justify-center items-center border-r-[3px] xl:border-r-4 border-t-[3px] xl:border-t-4 border-b-[3px] xl:border-b-4 rounded-r-lg border-[#9763AB] w-20 sm:w-28 xl:w-40 h-12 md:h-14 lg:h-16 2xl:h-[90px] cursor-pointer hover:bg-[#F9F9F9]"
          >
            <plus-icon
              class="w-5 sm:w-6 xl:w-7 2xl:w-8 h-5 sm:h-6 xl:h-7 2xl:h-8"
            ></plus-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plusIcon from "@/vues/icons/plusIcon.vue";
import minusIcon from "@/vues/icons/minusIcon.vue";

export default {
  props: {
    classicQuantitySelect: { type: Object, default: () => ({}) },
  },
  components: { plusIcon, minusIcon },
  setup() {
    const orderQuantity = {
      count: 1,
    };
    const btnReduce = () => {
      if (orderQuantity.count <= 0) {
        orderQuantity.count = 0;
      } else {
        orderQuantity.count -= 1;
      }
    };
    const btnIcrease = () => {
      orderQuantity.count += 1;
    };
    return {
      orderQuantity,
      btnReduce,
      btnIcrease,
    };
  },
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
