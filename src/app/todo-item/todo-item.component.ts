import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
	selector: 'app-todo',
	standalone: true,
	imports: [],
	template: `
		<li [class.completed]="task.completed" [class.editing]="isEditing()">
			<div class="view">
				<input
					class="toggle"
					type="checkbox"
					[checked]="task.completed"
					(change)="completeTodo.emit(this.task)"
				/>
				<label (dblclick)="isEditing.set(true)">{{ task.task_name }}</label>
			</div>
			@if (isEditing()) {
				<input
					type="text"
					#updatedTask
					[value]="task.task_name"
					class="edit"
					(blur)="emitUpdatedTask(task, updatedTask.value)"
					(keyup.enter)="emitUpdatedTask(task, updatedTask.value)"
				/>
			}
			<button class="destroy" (click)="deleteTodo.emit(task)"></button>
		</li>
	`
})
export class TodoItemComponent {
	isEditing = signal(false);
	@Input({ required: true }) task!: Todo;
	@Output() deleteTodo = new EventEmitter<Todo>();
	@Output() completeTodo = new EventEmitter<Todo>();
	@Output() updateTodo = new EventEmitter<{ todo: Todo; task_name: string }>();

	emitUpdatedTask(todo: Todo, task_name: string) {
		if (task_name.trim() === '' || task_name === todo.task_name) return this.isEditing.set(false);
		this.updateTodo.emit({ todo, task_name });
		this.isEditing.set(false);
	}
}
