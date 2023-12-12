import { Component, inject } from '@angular/core';
import { TodoFooterComponent } from '../../common/footer.component';
import { TodoHeaderComponent } from '../../common/header.component';
import { TodoStore } from '../../store/todo.store';

@Component({
	selector: 'app-todo',
	standalone: true,
	imports: [TodoFooterComponent, TodoHeaderComponent],
	template: `
		<section class="todoapp">
			<app-todo-header />
			<!-- This section should be hidden by default and shown when there are todos -->
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" />
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					@for (item of store(); track item) {}
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class editing when editing and completed when marked as completed -->
				</ul>
			</section>
			<!-- This footer should be hidden by default and shown when there are todos -->
			<app-todo-footer />
		</section>
	`,
	providers: [TodoStore]
})
export class TodoComponent {
	store = inject(TodoStore).tasks;
}
