import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
  providedIn:'root'
})
export class canexit implements CanDeactivate<IDeactivate>{
  canDeactivate(component: IDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

return component.canExit()

  }

}

export interface IDeactivate{
  canExit():boolean
}
