export interface Todo {
	task_name: string;
	completed: boolean;
}

export type TodoFilter = 'all' | 'active' | 'completed';
