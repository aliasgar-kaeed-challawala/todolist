import { Component, OnInit } from '@angular/core';



export interface Todo{
  desc:string
  isCompleted:boolean

}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  
  
  localItem: any;
  todos:Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }
  complete(todo:Todo){
    todo.isCompleted=true;
  }
  redo(todo:Todo){
    todo.isCompleted=false;
  }
  addTodo(desc:string){
      var todo = {
        desc:desc,
        isCompleted:false
      }
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos));

  }
  delete(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
