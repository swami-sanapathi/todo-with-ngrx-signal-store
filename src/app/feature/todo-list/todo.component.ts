import { Component } from '@angular/core';

@Component({
	selector: 'app-todo',
	standalone: true,
	imports: [],
	template: `
		<li class="completed">
			<div class="view">
				<input class="toggle" type="checkbox" checked />
				<label>Taste JavaScript</label>
				<button class="destroy"></button>
			</div>
			<input class="edit" value="Create a TodoMVC template" />
		</li>
		<li>
			<div class="view">
				<input class="toggle" type="checkbox" />
				<label>Buy a unicorn</label>
				<button class="destroy"></button>
			</div>
			<input class="edit" value="Rule the web" />
		</li>
	`
})
export class TodoComponent {}
