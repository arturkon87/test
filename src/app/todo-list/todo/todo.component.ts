import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../shared/interfaces/todo.interface";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  openModal = false;

  deleteTodo() {
    this.delete.emit();
  }

  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;
  }

  toggleModal(): void {
    this.openModal = !this.openModal;
  }
}
