// src/todo.ts

import { Todo } from './styles';

export class TodoList {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTodo(text: string): void {
    const newTodo: Todo = {
      id: this.nextId++,
      text,
      completed: false
    };
    this.todos.push(newTodo);
    console.log(`Added: ${text}`);
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log(`Removed todo with id: ${id}`);
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      console.log(`Toggled todo with id: ${id}`);
    }
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
