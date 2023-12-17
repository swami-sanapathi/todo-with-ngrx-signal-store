import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./todos/todo.routes')
	},
	{
		path: '**',
		redirectTo: 'all',
		pathMatch: 'full'
	}
];
