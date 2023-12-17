import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoFooterComponent } from '../common/todo-footer.component';
import { TodoService } from '../data-access/todo.service';
import { TodoFilter } from '../models/todo.model';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
	selector: 'app-todo-list',
	standalone: true,
	providers: [TodoService],
	// providers: [TodoStore],
	imports: [TodoFooterComponent, NewTodoComponent, TodoItemComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		@defer (on idle) {
			<header class="header">
				<h1>todos</h1>
				<app-new-todo (newTodo)="todoStore.addTodo($event)" />
			</header>
		}
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox" />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
				@for (item of todoStore.filteredTodos(); track item) {
					<app-todo
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
				(clearCompletedTasks)="todoStore.clearCompleted()"
			/>
		}
	`
})
export default class TodoListComponent implements OnInit {
	todoStore = inject(TodoService);
	router = inject(ActivatedRoute);
	@Input() set filter(filter: TodoFilter) {
		this.todoStore.changeFilter(filter);
	}

	ngOnInit() {
		this.todoStore.init();
	}
}
