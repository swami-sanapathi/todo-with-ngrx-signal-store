import { Component, inject } from '@angular/core';
import { TodoFooterComponent } from '../../common/footer.component';
import { TodoHeaderComponent } from '../../common/header.component';
import { TodoService } from '../../data-access/todo.service';
import { TodoComponent } from './todo.component';

@Component({
	selector: 'app-todo-list',
	standalone: true,
	imports: [TodoFooterComponent, TodoHeaderComponent, TodoComponent],
	template: `
		@defer (on idle) {
			<app-todo-header />
		}
		<!-- This section should be hidden by default and shown when there are todos -->
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox" />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
				@for (item of todoService.todos(); track item) {
					<app-todo
						[task]="item"
						(deleteTodo)="todoService.deleteTodo($event)"
						(completeTodo)="todoService.completeTask($event)"
						(updateTodo)="todoService.updateTask($event)"
					/>
				}
			</ul>
		</section>
		@if (todoService.todos().length) {
			<app-todo-footer />
		}
	`
})
export default class TodoListComponent {
	todoService = inject(TodoService);
	constructor() {
		this.todoService.init();
	}
}
