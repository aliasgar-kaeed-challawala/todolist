import { Component, OnInit, Optional } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { Todo } from 'src/app/todo-service.service';
import { ActivatedRoute, Params} from '@angular/router';

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
  todos:any[] = [];
  category:any = "";

  constructor(private todoService: TodoServiceService,private route: ActivatedRoute) {
    // this.localItem = localStorage.getItem("todos");
    // if(this.localItem==null){
    //   this.todos=[];
    // }
    // else{
    //   this.todos = JSON.parse(this.localItem);
    // }
    
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'))   
      this.category = params.get('id');
      console.log(this.category);
    })
    this.getData();
    
    
    
    
   
   }
   
   getData(){
    // this.todoService.getData().subscribe(
    //   data=>{
 
    //     if(data){
    //         const todoItem : Todo[] = [];
    //         for(const[key,value] of Object.entries(data)){
              
    //           todoItem.push(value)
    //           console.log(todoItem)
    //         }
            
    //         for(let i=0;i<todoItem.length;i++){
    //             this.todos.push(todoItem[i]);
    //         }
    //     }
    //   }
    // )
    this.todoService._todos.subscribe(data=>{
      // this.calculateCount(data)
      this.todos=data;
     
    })
   }
  ngOnInit(): void {
    this.getData();
    
 
  }
  complete(key:Optional){
       this.todoService.completeTodo(key);
       this.ngOnInit();
      
    }
  redo(key:Optional){
    this.todoService.redoTodo(key);
    
  }
  // addTodo(desc:string,category:string,title:string){
  //      this.todoService.addTODO(desc,category,title);
        
  // }
  delete(key:Optional){
    this.todoService.removeTodo(key);
   
  }

}
