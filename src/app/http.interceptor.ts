import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'X-RapidAPI-Key': environment['X-RapidAPI-Key'],
        'X-RapidAPI-Host': environment['X-RapidAPI-Host']
      }
    });

    return next.handle(request);
  }
}

