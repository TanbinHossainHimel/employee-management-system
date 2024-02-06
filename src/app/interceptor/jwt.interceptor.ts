import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";


@Injectable()
export class jwtInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const jwt = 'I have no jwt';
    const newReq = req.clone({
      setHeaders: {Authorization: jwt},
    });
    return next.handle(newReq);
  }
}
