import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../shared/todo';

@Component({
	selector: 'app-todo',
	standalone: true,
	imports: [],
	template: `
		<li [class.completed]="task.completed">
			<div class="view">
				<input
					class="toggle"
					type="checkbox"
					(dblclick)="isEditing = true"
					[checked]="task.completed"
					(change)="completeTodo.emit(this.task)"
					(keyup.enter)="updateTodo.emit(this.task)"
				/>
				@if (isEditing) {
					<input
						type="text"
						[value]="task.task_name"
						class="edit"
						(keyup.enter)="updateTodo.emit(this.task)"
					/>
				}
				<label>{{ task.task_name }}</label>
			</div>
			<button class="destroy" (click)="deleteTodo.emit(task)"></button>
		</li>
	`
})
export class TodoComponent {
	isEditing = false;
	@Input({ required: true }) task!: Todo;
	@Output() deleteTodo = new EventEmitter<Todo>();
	@Output() completeTodo = new EventEmitter<Todo>();
	@Output() updateTodo = new EventEmitter<Todo>();
}
