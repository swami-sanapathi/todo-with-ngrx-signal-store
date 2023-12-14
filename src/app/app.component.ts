import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	template: `
		<section class="todoapp">
			<router-outlet />
		</section>

		<app-footer />
	`,
	imports: [RouterOutlet, FooterComponent]
})
export class AppComponent {
	title = 'todo-ngrx-signal-store';
}
