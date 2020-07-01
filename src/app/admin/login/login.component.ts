import { AuthService } from './../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService,private router:Router) { }
  msg;

  ngOnInit() {
  }
  check(uname:string,p:string){
    var output=this.authservice.checkUserNameAndPassword(uname,p);
    if(output==true){
      this.router.navigate(["/dashboard"]);

    }
    else{
      this.msg="Invalid username or password"
    }
  }

}
