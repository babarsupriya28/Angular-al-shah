import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkUserNameAndPassword(uname:string, pwd:string){
    if(uname=="admin" && pwd=="admin")
    {
      localStorage.setItem("username", "admin");
      localStorage.setItem("role", "admin");

      return true;
    }
    else if(uname=="user" && pwd=="user")
    {
      localStorage.setItem("username", "user");
      localStorage.setItem("role", "user");

      return true;
    }
    else{
      return false;
    }

  }
}
