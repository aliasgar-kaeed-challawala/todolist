import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  signIn(signInForm:NgForm){
    if(signInForm.value.emailId == "aliasgarkcdls@gmail.com" && signInForm.value.password=="12345678"){
      this.router.navigate(['/addtodo']);
    }
    else{
      this.router.navigate(['/'])
    }
    
  }
}
