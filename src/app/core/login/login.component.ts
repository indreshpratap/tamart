import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { username: null, password: null };

  constructor(private router:Router) { }

  ngOnInit() {
  }

  doLogin(form) {
    if (form.invalid) {
      alert("Your form has errors");
    }else {
      // received model object
      console.log(form.value);
      this.router.navigate(['home']);
    }
    console.log(form);
  }

}
