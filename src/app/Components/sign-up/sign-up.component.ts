import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      emailId:new FormControl('name@example.com'),
    }
  )
  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',Validators.required)
  });
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Submitted!!");
    if(this.registerForm.valid){
      this.router.navigate(['/addtodo']);
    }
    

  }
}
