import { signalStore, withMethods, withState } from '@ngrx/signals';

export const TodoStore = signalStore(
	withState({
		tasks: [
			{ id: 1, task_name: 'Taste JavaScript', completed: true },
			{ id: 2, task_name: 'Buy a unicorn', completed: false }
		]
	}),
	withMethods(({ tasks, ...store }) => ({
		addTodo() {
			console.log('tasks -->', tasks);
			console.log('store -->', store);
			// patchState(store, { tasks: [...tasks, { id: 3, task_name: 'Rule the web', completed: false }] });
		}
	}))
);
