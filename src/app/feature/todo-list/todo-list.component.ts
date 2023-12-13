import { Component, inject } from '@angular/core';
import { TodoFooterComponent } from '../../common/footer.component';
import { TodoHeaderComponent } from '../../common/header.component';
import { TodoStore } from '../../store/todo.store';
import { TodoComponent } from './todo.component';

@Component({
	selector: 'app-todo-list',
	standalone: true,
	imports: [TodoFooterComponent, TodoHeaderComponent, TodoComponent],
	template: `
		<section class="todoapp">
			<app-todo-header />
			<!-- This section should be hidden by default and shown when there are todos -->
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" />
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					@for (item of store(); track item) {
						<app-todo [task]="item" />
					}
				</ul>
			</section>
			<!-- This footer should be hidden by default and shown when there are todos -->
			<app-todo-footer />
		</section>
	`,
	providers: [TodoStore]
})
export class TodoListComponent {
	store = inject(TodoStore).tasks;
}
