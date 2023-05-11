<script setup lang="ts">
import LogoMerenga from '~/components/shared/logo/LogoMerenga.vue';
import LinkBase from '~/components/shared/link/LinkBase.vue';
import HeaderButtons from '~/components/header/HeaderButtons.vue';
import HeaderNavigation from '~/components/header/HeaderNavigation.vue';
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
  position: relative;
  z-index: 5;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    position: relative;
    gap: 10px;
  }

}

</style>
