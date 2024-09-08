import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StoreProducts } from "@factorial/models";
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable()
export class StoreService {
    private readonly URL = `http://localhost:8888/api/store/products`

    constructor(private http: HttpClient) {}

    getStoreProducts(): Observable<StoreProducts> {
        return this.http.get<StoreProducts>(this.URL).pipe(
            catchError((error: unknown) => EMPTY)
        );
    }
}