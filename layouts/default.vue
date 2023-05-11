<script
    setup
    lang="ts"
>
import HeaderOne from '~/components/header/HeaderOne.vue';
import FooterOne from '~/components/footer/FooterOne.vue';
</script>

<template>
  <div class="global-wrapper">
    <HeaderOne/>
    <main class="main">
      <slot/>
    </main>
    <FooterOne/>
  </div>
</template>

<style
    scoped
    lang="scss"
>
.global-wrapper {
  width: 100%;
  height: 100vh;
  background-color: $merenga-cream;
  overflow: hidden;
}
</style>
