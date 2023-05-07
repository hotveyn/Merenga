<script setup lang="ts">
import Navigation from "~/components/shared/navigation/Navigation.vue";
import {INavigation} from "~/interfaces/INavigation";

const navLinks: INavigation[] = [
  {
    title: 'Каталог',
    link: "/catalog"
  },
  {
    title: 'Доставка',
    link: "/delivery"
  },
  {
    title: 'Контакты',
    link: "/contacts"
  },
]
</script>

<template>
  <Navigation
      :nav-links="navLinks"
      class="header__nav"
  />
</template>

<style scoped lang="scss">

</style>