<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
import { computed } from '#imports';
import { NuxtLink } from '#components';

const props = withDefaults(defineProps<{
  to?: RouteLocationRaw | null
  type?: 'beige' | 'cream' | 'switch',
  // target?: '_blank' | '_parent' | '_self' | '_top';
  // rel?: 'noreferrer' | 'external'
}>(), { type: 'beige', to: null });

const buttonVariant = computed(() => {
	return props.to ? NuxtLink as string : 'button';
});

// const buttonAttributes = {
//   class: 'button-base_' + props.type
// }
//
// const linkAttributes = {
//   class: 'button-base_' + props.type,
//   to: props.to,
//   type: props.type,
//   target: props.target,
//   rel: props.rel
// }
//
// const attributes = computed(() => {
//   if (props.to) {
//     return linkAttributes
//   }
//   return buttonAttributes
// })
</script>

<template>
  <Component :is="buttonVariant" :to="props.to" class="button-base" :class="'button-base_'+props.type">
    <slot/>
  </Component>
</template>

<style scoped lang="scss">
.button-base {
  display: block;
  width: fit-content;
  border-radius: 50px;
  border: none;
  font-size: adpval(16, 22);
  color: $merenga-black;
  cursor: pointer;

  &_beige {
    background-color: $merenga-beige;
    padding: adpval(12, 20) adpval(37, 60);
    font-weight: 600;
  }

  &_cream {
    background-color: $merenga-cream;
    padding: adpval(12, 20) adpval(37, 60);
    font-weight: 600;
  }

  &_switch {
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    gap: 11px;
    font-weight: 500;

    &::after {
      content: '';
      width: 17px;
      height: 14px;
      background-image: url("/images/icons/arrow-right.svg");
      background-size: contain;
    }
  }
}
</style>
