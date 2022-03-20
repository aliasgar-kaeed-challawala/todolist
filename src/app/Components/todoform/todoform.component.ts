import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { Todo } from 'src/app/todo-service.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
  }
  addTodo(desc:string,category:string,title:string){
    this.todoService.addTODO(desc,category,title);
     
}

}
