import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { AuthenticationService } from "../service/authentication.service";
import { Router } from "@angular/router";

@Injectable()
export class AppInterceptor implements HttpInterceptor{
constructor(private auth:AuthenticationService, private router:Router){

}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Request Intercepted",request);
        const token = this.auth.getToken()
        if(token!=null){
            // request = request.clone({setHeaders:{"Authorization" : "Bearer" + token}})
            request = request.clone({setHeaders:{"content-type": "application/json"}})
        }
        return next.handle(request).pipe(

            map((resp:any)=>{
                console.log("Request Intercepted",resp)
                return resp
            }),

            catchError((error:HttpErrorResponse)=>{
                if(error instanceof HttpErrorResponse){
                    if(error.status == 401){
this.router.navigate(['/login'])
                    }
                }
                return throwError("Unable to Process your request, please try agai after sometime")
            })
         
          )
        
           
        
        
        throw new Error("Method not Implemented")
    }
}