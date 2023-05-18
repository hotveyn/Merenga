<script setup lang="ts">
import { useRoute } from '#imports';

const route = useRoute();
</script>

<template>
  <h1>
    {{ route.params.id }}
  </h1>
</template>

<style scoped lang="scss">

</style>
