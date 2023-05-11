<script setup lang="ts">
import { useRoute } from '#app';

const route = useRoute();
</script>

<template>
  <h1>{{ route.name }}</h1>
</template>

<style scoped lang="scss">
</style>
