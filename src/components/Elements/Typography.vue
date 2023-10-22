<template>
    <component :is="type" class="">
        <slot />
    </component>
</template>

<script setup lang="ts">
const props = defineProps({
  font: {
    type: String,
    default: "body"
  },
  type: {
    type: String,
    default: "div",
  },
  align: {
    type: String,
  },
  weight: {
    type: String,
    default: "normal",
  },

  italic: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "dark",
  },
  case: {
    type: String,
    default: "normalcase",
  },
  bgColor: {
    type: String,
    default: "transparent",
  },
  size: {
    type: String,
    default: "base",
  }
});
</script>