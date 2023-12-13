import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/todo';

@Component({
	selector: 'app-todo',
	standalone: true,
	imports: [],
	template: `
		<li [class.completed]="task.completed">
			<div class="view">
				<input class="toggle" type="checkbox" checked />
				<label>{{ task.task_name }}</label>
				<button [class.destroy]="task.completed"></button>
			</div>
			<!-- <input class="edit" value="Create a TodoMVC template" /> -->
		</li>
	`
})
export class TodoComponent {
	@Input({ required: true }) task!: Todo;
}
