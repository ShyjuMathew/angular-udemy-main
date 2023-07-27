import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authKey = localStorage.getItem('authToken');
    if (authKey) {
      return next.handle(
        httpRequest.clone({
          setHeaders: { authorization: `Bearer ${authKey}` },
        })
      );
    }
    return next.handle(httpRequest);
  }
}
