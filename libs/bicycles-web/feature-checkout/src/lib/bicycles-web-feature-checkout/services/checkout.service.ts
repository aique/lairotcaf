import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CheckoutOrder } from "@factorial/models";
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable()
export class CheckoutService {
    private readonly URL = `http://localhost:8888/api/order/checkout`

    constructor(private http: HttpClient) {}

    setOrder(order: CheckoutOrder): Observable<void> {
        console.log(order)
        
        const body = {}

        return this.http.post<void>(this.URL, body).pipe(
            catchError((error: unknown) => EMPTY)
        );
    }
}