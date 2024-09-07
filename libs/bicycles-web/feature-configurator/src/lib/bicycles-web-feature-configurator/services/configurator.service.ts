import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfiguratorComponent, ConfiguratorOptions, ConfiguratorOptionsEndpointResponse } from "@factorial/models";
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable()
export class ConfiguratorService {
    private readonly URL = `http://localhost:8888/configurator/options`

    constructor(private http: HttpClient) {}

    getConfiguratorComponents(product: string): Observable<ConfiguratorOptionsEndpointResponse> {
        return this.http.get<ConfiguratorOptionsEndpointResponse>(this.getURL(product)).pipe(
            catchError((error: unknown) => EMPTY)
        );
    }

    private getURL(product: string): string {
        return `${this.URL}?product=${product}`
    }
}