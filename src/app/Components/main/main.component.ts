import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  todos:any[] = [];

  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
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

}
