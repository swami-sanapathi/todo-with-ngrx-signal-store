import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':filter',
		loadComponent: () => import('./todo-list/todo-list.component')
	},
	{
		path: '**',
		redirectTo: 'all'
	}
];
