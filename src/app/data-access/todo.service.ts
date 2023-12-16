import { Injectable, computed, signal } from '@angular/core';
import { Todo, TodoFilter } from '../models/todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
	filter = signal<TodoFilter>('all');
	todos = signal<Todo[]>([]);
	pendingTasks = computed(() => this.todos().filter((t) => !t.completed).length);
	filteredTodos = computed(() => {
		switch (this.filter()) {
			case 'active':
				return this.todos().filter((t) => !t.completed);
			case 'completed':
				return this.todos().filter((t) => t.completed);
			default:
				return this.todos();
		}
	});

	async init() {
		const tasks = await fetch('../../assets/tasks.json').then((res) => res.json());
		this.todos.set(tasks);
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

	updateTask(task: any) {
		this.todos.update((todos) =>
			todos.map((t) => (t.task_name === task.task.task_name ? { ...t, task_name: task.taskName } : t))
		);
	}

	clearCompleted() {
		this.todos.update((todos) => todos.filter((t) => !t.completed));
	}
}
