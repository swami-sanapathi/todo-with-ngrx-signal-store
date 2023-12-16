import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoFooterComponent } from '../../common/footer.component';
import { TodoService } from '../../data-access/todo.service';
import { TodoFilter } from '../../models/todo';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { TodoComponent } from './todo-item.component';

@Component({
	selector: 'app-todo-list',
	standalone: true,
	imports: [TodoFooterComponent, NewTodoComponent, TodoComponent],
	template: `
		@defer (on idle) {
			<header class="header">
				<h1>todos</h1>
				<app-new-todo (newTodo)="todoService.addTodo($event)" />
			</header>
		}
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox" />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
				@for (item of todoService.filteredTodos(); track item) {
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
export default class TodoListComponent implements OnInit {
	todoService = inject(TodoService);
	router = inject(ActivatedRoute);
	@Input() filter: TodoFilter = 'all';
	constructor() {
		this.router.params.subscribe((params) => {
			this.filter = params['filter'] || 'all';
			console.log('filter', this.filter);
			this.todoService.filter.set(this.filter);
		});
	}
	ngOnInit() {
		this.todoService.init();
	}
}
