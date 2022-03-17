import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface Todo{
  desc:string
  isCompleted:boolean
  date:Date
}

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {
  description: string;
  isCompleted:boolean;

  private _todos  = new Subject<Todo[]>();
  readonly todos$ = this._todos.asObservable();
  localItem: any;
  todos: any[]=[];
  constructor() {
    this.loadData();
   }
   loadData(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
   }
  addTODO(description: string){
    
    let todo = {} as Todo;
    todo.desc = description;
    todo.isCompleted = false;
    todo.date = new Date();
    this.todos.push(todo);
    console.log(this.todos);
    this._todos.next(this.todos);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    return this.todos;
  }
  
  removeTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    this._todos.next(this.todos); 
    localStorage.setItem("todos", JSON.stringify(this.todos));   
  
  }

  completeTodo(todo:Todo){
    todo.isCompleted=true;
    this._todos.next(this.todos);   
    localStorage.setItem("todos", JSON.stringify(this.todos)); 
    
  }
  redoTodo(todo:Todo){
    todo.isCompleted=false;
    this._todos.next(this.todos);    
    localStorage.setItem("todos", JSON.stringify(this.todos));
   
  }
 
}
