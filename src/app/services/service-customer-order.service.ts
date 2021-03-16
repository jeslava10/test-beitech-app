import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ModelOrder } from '../models/model-order.model';

const baseUrl = 'http://localhost:8089/api/beitech';

@Injectable({
  providedIn: 'root'
})
export class ServiceCustomerOrderService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getCustomerOrder(id:number , inicialFecha: Date , finalFecha:Date): Observable<any> {
    return this.http.get(`${baseUrl}/order/idCustomer=${id}/initialDate=${inicialFecha}/finalDate=${finalFecha}`);
  }

  getCustomerAll(): Observable<any> {
    return this.http.get(`${baseUrl}/customer/all`);
  }

 handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
    } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

}
