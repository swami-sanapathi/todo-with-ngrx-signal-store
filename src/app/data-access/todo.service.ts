import { Injectable, computed, signal } from '@angular/core';
import { Todo, TodoFilter } from '../models/todo.model';

@Injectable()
export class TodoService {
	filter = signal<TodoFilter>('all');
	todos = signal<Todo[]>([]);
	pendingTasksCount = computed(() => this.todos().filter((t) => !t.completed).length);
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

	updateTask({ todo, task_name }: { todo: Todo; task_name: string }) {
		this.todos.update((todos) => todos.map((t) => (t.task_name === todo.task_name ? { ...t, task_name } : t)));
	}

	clearCompleted() {
		this.todos.update((todos) => todos.filter((t) => !t.completed));
	}

	changeFilter(filter: TodoFilter) {
		this.filter.set(filter);
	}
}
