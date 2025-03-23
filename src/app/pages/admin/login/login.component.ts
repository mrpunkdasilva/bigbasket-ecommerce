import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    username: "",
    password: ""
  };

  constructor(private  router: Router) {
  }

  onLogin() {
    if (this.loginObj.username == "admin" && this.loginObj.password == "334455") {
      this.router.navigateByUrl("/products");
    } else {
      alert("Wrong credentials");
    }
  }

}

