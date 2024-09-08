import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfiguratorOptions } from "@factorial/models";
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable()
export class ConfiguratorService {
    private readonly URL = `http://localhost:8888/api/configurator/options`

    constructor(private http: HttpClient) {}

    getConfiguratorComponents(product: string): Observable<ConfiguratorOptions> {
        return this.http.get<ConfiguratorOptions>(this.getURL(product)).pipe(
            catchError((error: unknown) => EMPTY)
        );
    }

    private getURL(product: string): string {
        return `${this.URL}?product=${product}`
    }
}