import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfiguratorOptions } from "@factorial/models";
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable()
export class ConfiguratorService {
    private readonly URL = `http://localhost:8888/configurator/options`

    constructor(private http: HttpClient) {}

    getConfiguratorOptions(product: string): Observable<ConfiguratorOptions> {
        return this.http.get<ConfiguratorOptions>(this.URL).pipe(
            catchError((error: unknown) => EMPTY)
        );
    }
}