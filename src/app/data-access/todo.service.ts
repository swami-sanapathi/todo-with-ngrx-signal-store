import { Injectable, signal } from '@angular/core';
import { Todo } from '../shared/todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
	todos = signal<Todo[]>([]);

	init() {
		this.todos.set([
			{ task_name: 'Taste JavaScript', completed: true },
			{ task_name: 'Buy a unicorn', completed: false }
		]);
	}

	addTodo(todo: Todo) {
		console.log('addTodo', todo);
		this.todos.update((todos) => [...todos, todo]);
	}

	deleteTodo(todo: Todo) {
		this.todos.update((todos) => todos.filter((t) => t !== todo));
	}

	completeTask(todo: Todo) {
		this.todos.update((todos) =>
			todos.map((t) => (t.task_name === todo.task_name ? { ...t, completed: !t.completed } : t))
		);
	}

	updateTask(todo: Todo) {
		this.todos.update((todos) =>
			todos.map((t) => (t.task_name === todo.task_name ? { ...t, task_name: todo.task_name } : t))
		);
	}
}
