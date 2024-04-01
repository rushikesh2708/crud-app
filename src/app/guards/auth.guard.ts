import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../service/authentication.service";


@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router, private auth:AuthenticationService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error("Method not implemented.");

    const token = this.auth.getToken()

    if(token){
      return true
    }
    else{
      alert("Please do Login first")
      this.router.navigate(["/login"])
      return false
    }
  }
  
}