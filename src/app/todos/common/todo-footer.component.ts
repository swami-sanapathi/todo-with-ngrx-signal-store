import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

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
					<a routerLink="/all" [class.selected]="selectedFilter === 'all'">All</a>
				</li>
				<li>
					<a routerLink="/active" [class.selected]="selectedFilter === 'active'">Active</a>
				</li>
				<li>
					<a routerLink="/completed" [class.selected]="selectedFilter === 'completed'">Completed</a>
				</li>
			</ul>
			<button class="clear-completed" (click)="clearCompletedTasks.emit()">Clear completed</button>
		</footer>
		,
	`,
	imports: [RouterLink]
})
export class TodoFooterComponent {
	@Output() clearCompletedTasks = new EventEmitter();
	@Input() count: number = 0;
	@Input() completed: boolean = false;
	@Input() selectedFilter: string = 'all';
}
