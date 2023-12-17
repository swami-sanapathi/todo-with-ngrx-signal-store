import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
	standalone: true,
	selector: 'app-new-todo',
	template: `<input
		class="new-todo"
		placeholder="What needs to be done?"
		#task
		autofocus
		(keyup.enter)="addTodo(task.value); task.value = ''"
	/>`
})
export class NewTodoComponent {
	@Output() newTodo = new EventEmitter<Todo>();

	addTodo(task: string) {
		if (!task.trim()) return;
		this.newTodo.emit({ completed: false, task_name: task.trim() } as Todo);
	}
}
