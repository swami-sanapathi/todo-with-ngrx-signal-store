import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TodoService } from '../data-access/todo.service';

@Component({
	selector: 'app-todo-footer',
	standalone: true,
	template: `
		<footer class="footer">
			<!-- This should be 0 items left by default -->
			<span class="todo-count"
				><strong>{{ todoStore.pendingTasks() }}</strong> item left</span
			>
			<!-- Remove this if you don't implement routing -->
			<ul class="filters">
				<li>
					<a routerLink="/all" routerLinkActive="selected">All</a>
				</li>
				<li>
					<a routerLink="/active" routerLinkActive="selected">Active</a>
				</li>
				<li>
					<a routerLink="/completed" routerLinkActive="selected">Completed</a>
				</li>
			</ul>
			<!-- Hidden if no completed items are left ↓ -->
			<button class="clear-completed" (click)="todoStore.clearCompleted()">Clear completed</button>
		</footer>
		,
	`,
	imports: [RouterLink, RouterLinkActive]
})
export class TodoFooterComponent {
	todoStore = inject(TodoService);
}
