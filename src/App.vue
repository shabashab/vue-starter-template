<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);

useHead({
  title: "Vue Starter Template",
});

const onButtonClick = () => {
  toggleDark();
};

const buttonText = computed(() => {
  return isDark.value ? "Enter light mode": "Enter dark mode";
});
</script>

<template>
  <div
    class="bg-white dark:bg-dark-900 w-screen h-screen flex flex-col justify-center items-center text-dark-200 dark:text-white"
  >
    <h1 class="font-bold font-primary prose-2xl">Vue Starter Template</h1>
    <p class="prose font-secondary text-center mt-10">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus
      reprehenderit dolore aliquid voluptates quos beatae perspiciatis rerum,
      deserunt similique corporis culpa enim repellendus ipsa obcaecati iusto
      vitae voluptate sed!
    </p>
    <Button @click="onButtonClick" class="mt-5" :text="buttonText" />
  </div>
</template>
