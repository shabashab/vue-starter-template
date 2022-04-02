<script lang="ts" setup>
import { isDark, toggleDark } from "~/composables/dark";

const { t, availableLocales, locale } = useI18n();

const localesCycleList = useCycleList(availableLocales);

useHead({
  title: "Vue Starter Template",
  meta: [
    {
      name: "description",
      content: "Website description"
    }
  ]
});

const onThemeSwitcherButtonClick = () => {
  toggleDark();
};

const themeSwitcherButtonText = computed(() => {
  return isDark.value ? t("buttons.lightMode") : t("buttons.darkMode");
});

const onLanguageSwitcherButtonClick = () => {
  localesCycleList.next();
};

watchEffect(() => {
  locale.value = localesCycleList.state.value;
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
      {{ t("home.title") }}
    </h1>
    <p class="font-secondary mt-10 prose">
      {{ t("home.paragraph") }}
    </p>
    <PageButton
      class="mt-5"
      :text="themeSwitcherButtonText"
      @click="onThemeSwitcherButtonClick"
    />
    <PageButton
      class="mt-5"
      :text="localesCycleList.state.value" 
      @click="onLanguageSwitcherButtonClick"
    />
  </div>
</template>