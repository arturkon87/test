import { compileNgModule } from "@angular/compiler";
import { Component } from "@angular/core";
import { Todo } from "../shared/interfaces/todo.interface";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.css",
})
export class TodoListComponent {
  clearErrorMessage() {
    this.errorMessage = "";
  }
  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;
    console.log(this.todos);
  }
  todos: Todo[] = [];
  errorMessage = "";
  addTodo(todo: string): void {
    if (todo.length <= 3) {
      this.errorMessage = "The task must be at least 4 characters long";
      return;
    }
    this.todos.push({ name: todo, isComplete: false });
    console.log("Actual list todo: ", this.todos);
  }
}
