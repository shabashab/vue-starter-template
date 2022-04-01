<script setup lang="ts">
useHead({
  title: "Vue Starter Template",
});

const onButtonClick = () => {
  alert("Hello, World!");
};
</script>

<template>
  <div
    class="bg-gray-900 bg-transparentw-screen h-screen flex flex-col justify-center items-center text-white"
  >
    <h1 class="font-bold font-primary prose-2xl">Vue Starter Template</h1>
    <p class="prose font-secondary text-center mt-10">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus
      reprehenderit dolore aliquid voluptates quos beatae perspiciatis rerum,
      deserunt similique corporis culpa enim repellendus ipsa obcaecati iusto
      vitae voluptate sed!
    </p>
    <Button @click="onButtonClick" class="mt-5" text="Hello, world!" />
  </div>
</template>
