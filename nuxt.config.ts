// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/supabase',
		'@pinia/nuxt',
		'@nuxtjs/google-fonts',
		'nuxt-swiper'
	],
	swiper: {
		styleLang: 'scss'
	},
	components: [
		{
			pathPrefix: false
		}
	],
	imports: {
		autoImport: false
	},
	googleFonts: {
		families: {
			Rubik: true
		},
		subsets: 'cyrillic'
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/css/_usage.scss" as *;'
				}
			}
		}
	},
	css: [
		'assets/css/reset.scss',
		'assets/css/_globals.scss'

	],
	app: {
		head: {
			title: 'Меренга'
		}
	}
});
