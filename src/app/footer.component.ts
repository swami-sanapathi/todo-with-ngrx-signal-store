import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	standalone: true,
	template: ` <footer class="info">
		<p>Created by <a href="http://www.github.com/swami-sanapathi">Swami</a></p>
		<p>Follow me on <a href="http://twitter.com/SwamiSanapathi">twitter</a></p>
	</footer>`
})
export class FooterComponent {}
