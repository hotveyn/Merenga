<script setup lang="ts">
import LogoMerenga from "~/components/shared/logo/LogoMerenga.vue";
import LinkBase from "~/components/shared/link/LinkBase.vue";
import HeaderButtons from "~/components/header/HeaderButtons.vue";
</script>

<template>
  <header class="header">
    <div class="container header__content">
      <LinkBase class="header__logo" to="/">
        <LogoMerenga/>
      </LinkBase>
      <HeaderNavigation/>
      <HeaderButtons/>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 40px 0;
  width: 100%;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  &__nav {
    justify-self: center;
  }
}

</style>