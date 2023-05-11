<template>
  <div class="icon">
      <slot/>
  </div>
</template>

<style scoped lang="scss">
:slotted(img) {
  width: adpval(20, 35);
}
</style>
