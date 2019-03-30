import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log("inside interceptor");
        console.log("token is: "+window.sessionStorage.getItem("token"));
        let token = window.sessionStorage.getItem("token");
        if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }

        return next.handle(req);
    }    

}