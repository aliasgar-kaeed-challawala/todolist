import { Component, OnInit } from '@angular/core';
import { Todo, TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  todos: Todo[] = [];
  categories: string[] = ["work","leisure","personal","others"];
  completed: number = 0;
  constructor(private todoService: TodoServiceService) {
    this.todoService.todos$.subscribe(todos => this.todos = todos);
    this.todoService.todos$.subscribe(todos => this.completed = todos.filter(todo =>
       todo.isCompleted === true).length);
   }

  ngOnInit(): void {
  }


}
