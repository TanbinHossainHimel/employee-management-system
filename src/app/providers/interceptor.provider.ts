import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {encryptPayloadInterceptor} from "../interceptor/encrypt-payload.interceptor";
import {jwtInterceptor} from "../interceptor/jwt.interceptor";
import {Provider} from "@angular/core";

export const interceptorProvider: Provider[] = [
  {provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: encryptPayloadInterceptor, multi: true}
]
