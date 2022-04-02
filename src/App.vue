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
  return isDark.value ? "Enter light mode" : "Enter dark mode";
});
</script>

<template>
  <div
    w:bg="white dark:dark-900"
    w:text="dark-200 dark:white center"
    class="flex flex-col h-screen w-screen justify-center items-center"
  >
    <h1
      w:font="primary bold"
      class="prose-2xl"
    >
      Vue Starter Template
    </h1>
    <p class="font-secondary mt-10 prose">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet possimus
      reprehenderit dolore aliquid voluptates quos beatae perspiciatis rerum,
      deserunt similique corporis culpa enim repellendus ipsa obcaecati iusto
      vitae voluptate sed!
    </p>
    <PageButton
      class="mt-5"
      :text="buttonText"
      @click="onButtonClick"
    />
  </div>
</template>
