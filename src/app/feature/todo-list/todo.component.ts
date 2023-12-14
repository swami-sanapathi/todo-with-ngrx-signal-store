import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Todo } from '../../shared/todo';

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
export class TodoComponent {
	isEditing = signal(false);
	@Input({ required: true }) task!: Todo;
	@Output() deleteTodo = new EventEmitter<Todo>();
	@Output() completeTodo = new EventEmitter<Todo>();
	@Output() updateTodo = new EventEmitter<{ task: Todo; taskName: string }>();

	emitUpdatedTask(task: Todo, taskName: string) {
		if (taskName.trim() === '' || taskName === task.task_name) return this.isEditing.set(false);
		this.updateTodo.emit({ task, taskName });
		this.isEditing.set(false);
	}
}
