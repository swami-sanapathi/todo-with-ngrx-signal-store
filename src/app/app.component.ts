import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './feature/todo-list/todo-list.component';

@Component({
	selector: 'app-root',
	standalone: true,
	template: ` <app-todo-list /> `,
	imports: [RouterOutlet, TodoListComponent]
})
export class AppComponent {
	title = 'todo-ngrx-signal-store';
}
