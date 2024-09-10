import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CheckoutOrder, CheckoutOrderBody, CheckoutOrderBodyComponent, CheckoutUserData } from "@factorial/models";
import { Observable, catchError, map, of } from 'rxjs';

@Injectable()
export class CheckoutService {
    private readonly URL = `http://localhost:8888/api/order/checkout`

    constructor(private http: HttpClient) {}

    setOrder(order: CheckoutOrder): Observable<boolean> {
        const body = this.composeBody(order)

        if (!body) {
            return of(false)
        }

        return this.http.post<void>(this.URL, body).pipe(
            map(() => true),
            catchError(() => of(false))
        )
    }

    private composeBody(order: CheckoutOrder): CheckoutOrderBody | null {       
        if (!order.productOrder) {
            return null
        }

        const components: CheckoutOrderBodyComponent[] = []

        for (let component of order.productOrder.components) {
            components.push({
                id: component.id,
                option: component.option.id,
            })
        }
        
        const body = {
            userData: {
                name: order.userData.name,
                surname: order.userData.surname,
                email: order.userData.email,
                phone: order.userData.phone
            },
            order: {
                product: order.productOrder.product,
                components
            }
        }

        return body
    }
}