<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <button
    class="font-secondary text-light-100 bg-dark-50 dark:bg-green-700 rounded-md px-7 py-3 hover:bg-dark-100 hover:dark:bg-green-900 transition duration-200 hover:cursor-pointer"
  >
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped></style>
