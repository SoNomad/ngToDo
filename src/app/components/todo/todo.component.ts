import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetIdService } from '../../services/randomId.service';
import { ITodo } from '../../types/ITodo';
import { Todo } from '../../models/todo.model';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [GetIdService],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements AfterViewInit {
  constructor(private randomId: GetIdService) {}

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  public todos: ITodo[] = [];
  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  addTodo(input: HTMLInputElement) {
    if (!input.value) {
      return;
    }
    const randomId = this.randomId.getRandomId();
    const newTodo = new Todo(randomId, input.value);
    this.todos = [...this.todos, newTodo];
    input.value = '';
    input.focus();
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
