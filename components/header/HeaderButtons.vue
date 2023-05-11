<script setup lang="ts">
import IconShoppingCart from '~/components/shared/icon/IconShoppingCart.vue';

</script>

<template>
  <div class="header__buttons">
    <NuxtLink to="/" class="header__button header__button_shop">
      <IconShoppingCart/>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.header{

  &__buttons {
    justify-self: center;
    display: flex;
    align-items: center;
    gap: adpval(10, 20);
  }
}
</style>
