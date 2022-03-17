import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { Todo } from 'src/app/todo-service.service';

// export interface Todo{
//   desc:string
//   isCompleted:boolean

// }
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  
  
  // localItem: any;
  todos:any[];

  constructor(private todoService: TodoServiceService) {
    // this.localItem = localStorage.getItem("todos");
    // if(this.localItem==null){
    //   this.todos=[];
    // }
    // else{
    //   this.todos = JSON.parse(this.localItem);
    // }
   }

  ngOnInit(): void {
  }
  complete(todo:Todo){
       this.todoService.completeTodo(todo);
      
    }
  redo(todo:Todo){
    this.todoService.redoTodo(todo);
    
  }
  addTodo(desc:string){
       let data = this.todoService.addTODO(desc);
        this.todos= data;
  }
  delete(todo:Todo){
    this.todoService.removeTodo(todo);
   
  }

}
