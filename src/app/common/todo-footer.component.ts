import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-todo-footer',
	standalone: true,
	template: `
		<footer class="footer">
			<span class="todo-count"
				><strong>{{ count }}</strong> items left</span
			>
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
			<button class="clear-completed" (click)="clearCompletedTasks.emit()">Clear completed</button>
		</footer>
		,
	`,
	imports: [RouterLink, RouterLinkActive]
})
export class TodoFooterComponent {
	@Output() clearCompletedTasks = new EventEmitter();
	@Input() count: number = 0;
	@Input() completed: boolean = false;
}
