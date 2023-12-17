import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { TodoFooterComponent } from '../common/todo-footer.component';
import { TodoStore } from '../data-access/todo.store';
import { TodoFilter } from '../models/todo.model';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
	selector: 'app-todo-list',
	standalone: true,
	providers: [TodoStore],
	imports: [TodoFooterComponent, NewTodoComponent, TodoItemComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<header class="header">
			<h1>todos</h1>
			<app-new-todo (newTodo)="todoStore.addTodo($event)" />
		</header>
		<section class="main">
			<ul class="todo-list">
				@for (item of todoStore.filteredTodos(); track item) {
					<app-todo-item
						[task]="item"
						(deleteTodo)="todoStore.deleteTodo($event)"
						(completeTodo)="todoStore.completeTask($event)"
						(updateTodo)="todoStore.updateTask($event)"
					/>
				}
			</ul>
		</section>
		@if (todoStore.todos().length) {
			<app-todo-footer
				[count]="todoStore.pendingTasksCount()"
				[selectedFilter]="todoStore.filter()"
				(clearCompletedTasks)="todoStore.clearCompleted()"
			/>
		}
	`
})
export default class TodoListComponent {
	todoStore = inject(TodoStore);
	@Input() set filter(filter: TodoFilter) {
		this.todoStore.changeFilter(filter);
	}
	constructor() {
		this.todoStore.init();
	}
}
