import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./feature/todo-list/todo-list.component')
	}
];
