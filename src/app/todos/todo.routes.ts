import { Routes } from '@angular/router';

export default [
	{ path: ':filter', loadComponent: () => import('./todo-list/todo-list.component') },
	{ path: '**', pathMatch: 'full', redirectTo: 'all' }
] as Routes;
