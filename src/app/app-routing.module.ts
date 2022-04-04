import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { TodoformComponent } from './Components/todoform/todoform.component';
import { TodosComponent } from './Components/todos/todos.component';

const routes: Routes = [
  {
    path:'todo/:id',
    component:TodosComponent
  },
  {path:'',component:SignInComponent},
  {path:'addtodo',component:TodoformComponent},
  {path:'signup',component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
  [
    TodosComponent
  ]
