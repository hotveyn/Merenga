import { RouteLocationRaw } from 'vue-router';

export interface ICompilation<T> {
	id: number
	title: string
	to: RouteLocationRaw
	items: Array<T>
}
