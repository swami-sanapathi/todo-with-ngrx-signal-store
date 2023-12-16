import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':filter',
		loadComponent: () => import('./feature/todo-list/todo-list.component')
	},
	{
		path: '**',
		redirectTo: 'all'
	}
];
