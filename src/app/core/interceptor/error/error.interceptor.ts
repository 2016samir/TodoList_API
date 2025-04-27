import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const toasterService = inject(ToastrService);

  return next(req).pipe( catchError( (err)=>{

    toasterService.error;
    console.log(err , "interceptor");
    

    return throwError( ()=> err )
  } ) )

};
