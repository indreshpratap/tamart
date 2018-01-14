import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageHelper } from 'app/utils/local_storage.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { username: null, password: null };

  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
  }

  doLogin(form) {
    if (form.invalid) {
      alert("Your form has errors");
    } else {
      // received model object
      console.log(form.value);
      this.http.post("http://localhost:3000/login", form.value)
        .subscribe((data: any) => {
          if(data.status){
            LocalStorageHelper.storeUserDetails(data);
            LocalStorageHelper.getToken();
            this.router.navigate(['home']);
          }else {
            alert(data.error);
          }
        });
    }
    console.log(form);
  }

}
