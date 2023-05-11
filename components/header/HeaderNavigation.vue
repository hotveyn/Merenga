<script
    setup
    lang="ts"
>
import Navigation from '~/components/shared/navigation/Navigation.vue';
import { INavigation } from '~/interfaces/INavigation';

const navLinks: INavigation[] = [
	{
		id: 1,
		title: 'Каталог',
		link: '/catalog'
	},
	{
		id: 2,
		title: 'Доставка',
		link: '/delivery'
	},
	{
		id: 3,
		title: 'Контакты',
		link: '/contacts'
	}
];
</script>

<template>
  <Navigation
      :nav-links="navLinks"
      class="header__nav"
  />
</template>

<style
    scoped
    lang="scss"
>
.header__nav {
  justify-self: center;
}
</style>
