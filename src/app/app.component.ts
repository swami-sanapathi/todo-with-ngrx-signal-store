import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './feature/todo-list/todo-list.component';

@Component({
	selector: 'app-root',
	standalone: true,
	template: ` <app-todo /> `,
	imports: [CommonModule, RouterOutlet, TodoComponent]
})
export class AppComponent {
	title = 'todo-ngrx-signal-store';
}
