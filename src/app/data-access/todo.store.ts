import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Todo, TodoFilter } from '../models/todo.model';

export const TodoStore = signalStore(
	withState<{ todos: Todo[]; filter: TodoFilter }>({ todos: [], filter: 'all' }),
	withComputed(({ todos, filter }) => ({
		filteredTodos: computed(() => {
			switch (filter()) {
				case 'active':
					return todos().filter((todo) => !todo.completed);
				case 'completed':
					return todos().filter((todo) => todo.completed);
				default:
				case 'all':
					return todos();
			}
		}),
		pendingTasksCount: computed(() => {
			return todos().filter((todo) => !todo.completed).length;
		})
	})),
	withMethods((store) => ({
		init: async () => {
			const tasks = await fetch('../../assets/tasks.json').then((res) => res.json());
			patchState(store, { todos: tasks });
		},
		addTodo: (todo: Todo) => {
			patchState(store, (state) => ({
				todos: [...state.todos, todo]
			}));
		},
		deleteTodo: (todo: Todo) => {
			patchState(store, (state) => ({
				todos: state.todos.filter((t) => t.task_name !== todo.task_name)
			}));
		},
		updateTask: ({ todo, task_name }) => {
			console.log(todo, task_name);
			patchState(store, (state) => ({
				todos: state.todos.map((t) => (t.task_name === todo.task_name ? { ...t, task_name } : t))
			}));
		},
		completeTask: (todo: Todo) => {
			patchState(store, (state) => ({
				todos: state.todos.map((t) => (t.task_name === todo.task_name ? { ...t, completed: !t.completed } : t))
			}));
		},
		changeFilter: (filter: TodoFilter) => {
			patchState(store, { filter });
		},
		clearCompleted: () => {
			patchState(store, (state) => ({
				todos: state.todos.filter((t) => !t.completed)
			}));
		}
	}))
);
