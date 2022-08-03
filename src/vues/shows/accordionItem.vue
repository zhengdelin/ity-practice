<template>
  <div class="accordion w-4/5 lg:w-full" id="accordionExample5">
    <div class="accordion-item bg-white border border-[#76448A] rounded-lg">
      <h2
        class="accordion-header mb-0 flex items-center w-full h-20 2xl:h-[100px] py-8 px-10 text-xl lg:text-2xl font-bold text-[#F9F9F9] text-left bg-[#76448A] rounded-t-lg border border-b-[#76448A]"
        id="headingOne5"
      >
        <button
          class="accordion-button relative border-0 rounded-t-md transition focus:outline-none bg-black"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne5"
          aria-expanded="true"
          aria-controls="collapseOne5"
        ></button>
        {{ title }}
      </h2>
      <div
        id="collapseOne5"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne5"
      >
        <div
          class="accordion-body text-left px-8 py-6 lg:p-10 text-lg lg:text-xl leading-normal lg:leading-[60px]"
        >
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
