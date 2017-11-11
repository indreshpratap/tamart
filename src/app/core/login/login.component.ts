import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={username:"indresh",password:"userpassword"};

  constructor() { }

  ngOnInit() {
  }

  doLogin(form){
if(form.invalid){
  alert("Your form is invalid");
}
    console.log(form);
  }

}
