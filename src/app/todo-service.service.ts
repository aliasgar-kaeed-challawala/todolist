import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject, filter, Observable, Subject } from 'rxjs';

export interface Todo{
  id:Optional
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
  baseUrl='https://todolist-app-162c5-default-rtdb.firebaseio.com/list';
   _todos  = new Subject<Todo[]>();
  readonly todos$ = this._todos.asObservable();
  localItem: any;
  listItems:Todo[]=[];
  todos: any[]=[];
  id=1;
  constructor(private http: HttpClient) {
    this.getData();
   }
  //  loadData(){
  //   this.localItem = localStorage.getItem("todos");
  //   if(this.localItem==null){
  //     this.todos=[];
  //   }
  //   else{
  //     this.todos = JSON.parse(this.localItem);
  //   }
  //  }
  addTODO(description: string){
    
    let todo = {} as Todo;
    todo.id=this.id;
    this.id+=1;
    todo.desc = description;
    todo.isCompleted = false;
    todo.date = new Date();
    this.http.post('https://todolist-app-162c5-default-rtdb.firebaseio.com/list.json',todo).subscribe(
      data=>this.getData()
    );
   
    // this.todos.push(todo);
    // console.log(this.todos);
    // this._todos.next(this.todos);
    // localStorage.setItem("todos", JSON.stringify(this.todos));
    // return this.todos;
  }
  // getData():Observable<Todo[]>{
  //   return this.http.get<Todo[]>("https://todolist-app-162c5-default-rtdb.firebaseio.com/list.json")
  // }
  
  removeTodo(key:Optional){
    // const index = this.todos.indexOf(todo);
    // this.todos.splice(index,1);
    // this._todos.next(this.todos); 
    // localStorage.setItem("todos", JSON.stringify(this.todos));   
    this.http.delete(`${this.baseUrl}/${key}.json`).subscribe(res=>{
      this.getData();
    })
  
  }

  completeTodo(key:Optional){
    let temp = {isCompleted:true};
    //  this._todos.next(this.todos);   
    // localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(key);
    this.http.patch(`${this.baseUrl}/${key}.json`,temp).subscribe(
      data=>{
        console.log(data)
        this.getData()
      }
    ) 
    
    
  }
  redoTodo(key:Optional){
    // todo.isCompleted=false;
    // this._todos.next(this.todos);    
    // localStorage.setItem("todos", JSON.stringify(this.todos));
    // this.http.patch("https://todolist-app-162c5-default-rtdb.firebaseio.com/list.json",todo) 
    let temp = {isCompleted:false};
    // this._todos.next(this.todos);  
    // this._todos.next(this.todos);   
    // localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(key);
    this.http.patch(`${this.baseUrl}/${key}.json`,temp).subscribe(
      data=>{
        console.log(data)
        this.getData();
      }
    ) 

    
  }
  getData(){
    this.http.get(`${this.baseUrl}.json`).subscribe((data: any) => {
      this.listItems = [];
      if (data) {
        this.listItems = Object.keys(data).map((key: any) => {
          data[key].id = key;
          this.listItems=data[key];
          console.log("HIIIIIIIIIIIIIIIIIIII");
          
          console.log(data[key]);
          return data[key];
        });
        this._todos.next(this.listItems)
      }
    });
  }
 
}
