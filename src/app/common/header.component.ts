import { Component } from '@angular/core';

@Component({
	selector: 'app-todo-header',
	standalone: true,
	template: `
		<header class="header">
			<h1>todos</h1>
			<input class="new-todo" placeholder="What needs to be done?" autofocus />
		</header>
	`
})
export class TodoHeaderComponent {}
