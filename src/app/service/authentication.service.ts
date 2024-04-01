import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getToken(){
   var token:string |null =""
   token = localStorage.getItem("ACCESS_TOKEN")
   if(token!=null){
    return token
   }
   else{
    return token
   }
  }

  setToken(token:string){
localStorage.setItem("ACCESS_TOKEN",token)
  }
}
