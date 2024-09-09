import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CheckoutOrder } from "@factorial/models";
import { EMPTY, Observable, catchError, map, of } from 'rxjs';

@Injectable()
export class CheckoutService {
    private readonly URL = `http://localhost:8888/api/order/checkout`

    constructor(private http: HttpClient) {}

    setOrder(order: CheckoutOrder): Observable<boolean> {
        if (!order.productOrder) {
            return of(false)
        }
        
        const body = {}

        return this.http.post<void>(this.URL, body).pipe(
            map(() => true),
            catchError((error: unknown) => of(false))
        );
    }
}