<script setup lang="ts">
import {useRoute} from "#app";

const route = useRoute()
</script>

<template>
  {{ route.name }}
</template>


<style scoped lang="scss">

</style>