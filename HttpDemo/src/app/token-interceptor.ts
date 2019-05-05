import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log("inside interceptor");
        console.log("token is: "+window.sessionStorage.getItem("token"));
        let token = window.sessionStorage.getItem("token");
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        
        
        if (token) {
            req = req.clone(
                { 
                    headers: 
                    req.headers.set('Authorization', 'Bearer ' + token).set('Content-Type','application/json').set('action','create')                                        
                });
        }

        return next.handle(req).pipe(
            map((event : HttpEvent<any>)=>{
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }
        ))
    }    

}