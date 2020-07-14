import { AuthService } from './../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
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

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    

  }

}
