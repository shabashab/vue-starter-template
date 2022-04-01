<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <button class="font-secondary bg-dark-50 rounded-md px-7 py-3 hover:bg-dark-100 transition duration-200 hover:cursor-pointer">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped></style>
