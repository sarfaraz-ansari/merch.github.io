<template>
    <img :src="src" :alt="alt" loading="lazy" :class="`h-[${height}px] w-[${width}px] aspect-square`">
</template>

<script setup lang="ts">

const props = defineProps({
    src: {
        type: String,
    },
    alt: {
        type: String,
        default: 'image'
    },
    height: {
        type: String,
        default: '100'
    },
    width: {
        type: String,
        default: '100'
    }
})
</script>