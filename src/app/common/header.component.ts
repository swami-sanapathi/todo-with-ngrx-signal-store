import { Component, inject } from '@angular/core';
import { TodoService } from '../data-access/todo.service';
import { NewTodoComponent } from '../feature/new-todo/new-todo.component';

@Component({
	selector: 'app-todo-header',
	standalone: true,
	template: `
		<header class="header">
			<h1>todos</h1>
			<app-new-todo (newTodo)="todoService.addTodo($event)" />
		</header>
	`,
	imports: [NewTodoComponent]
})
export class TodoHeaderComponent {
	todoService = inject(TodoService);
}
