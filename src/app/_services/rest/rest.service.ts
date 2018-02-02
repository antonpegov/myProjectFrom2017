import { PlatformLocation } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

export abstract class RestService<T> extends BehaviorSubject<T> {

    protected API_URL: string;              // Адрес единого апи
    // protected RESOURCE_NAME: string = '';   // Определится в наследниках
    protected PARAMS: String = '';          // Определится в наследниках

    constructor(
        private $http: HttpClient,
        private $platformLocation: PlatformLocation,
        private RESOURCE_NAME: string
    ) {
        super(null);
        const fullPath = ($platformLocation as any).location.href;
        this.API_URL = fullPath.slice(0, fullPath.lastIndexOf('selector')) + 'api/';
    }

    protected get = (params?: string) => {
        this.$http.get<T>(`${this.API_URL}${this.RESOURCE_NAME}?${this.PARAMS}`)
        .filter(this.responseFilter)
        .map(this.responseHandler)
        .subscribe(x => super.next(x));
    }
    protected post = (data: object, params?) => {
        this.$http.post<T>(`${this.API_URL}${this.RESOURCE_NAME}?${params}`, data, {params: params})
        .map(this.responseHandler)
        .subscribe(x => super.next(x));
    }
    protected put = (data: object, params?) => {
        this.$http.post<T>(`${this.API_URL}${this.RESOURCE_NAME}?${params}`, data, {params: params})
        .map(this.responseHandler)
        .subscribe(x => super.next(x));
    }
    protected delete = (data: object, params?) => {
        this.$http.post<T>(`${this.API_URL}${this.RESOURCE_NAME}?${params}`, data, {params: params})
        .map(this.responseHandler)
        .subscribe(x => super.next(x));
    }

    /**
     * Обработчик ответа сервера. В базовом класса просто прокидывает Observable,
     * ничего не меняя, а в производных классах переопределяется под конкретные нужды.
     * @param  {} response
     */
    protected responseHandler = (response) => response;

    /**
     * Фильтр ответа сервера. В базовом класса просто прокидывает Observable,
     * ничего не меняя, а в производных классах переопределяется под конкретные нужды.
     * @param  {} response
     */
    protected responseFilter = (response) => true;
}


// New HttpClient module imrovements:
// * Typed, synchronous response body access, including support for JSON body types
// * JSON is an assumed default and no longer needs to be explicitly parsed
// * Interceptors allow middleware logic to be inserted into the pipeline
// * Immutable request/response objects
// * Progress events for both request upload and response download
// * Post-request verification & flush based testing framework
