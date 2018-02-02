import { Injectable } from '@angular/core';
import { GridDataService } from './rest/';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { PlatformLocation } from '@angular/common';

/**
 * Сервис для работы с REST API отчетов
 */
// @Injectable()
// export class ReportService extends GridDataService {

//     constructor( 
//       $http: HttpClient, 
//       $location: PlatformLocation 
//     ) { 
//       super($http, $location, "Report"); 
//     }
    
//     // queryAll(state?: any): Observable<GridDataResult> {
//     //   const state = Object.assign({}, state);
//     //   delete state.skip;
//     //   delete state.take;

//     //   return this.fetch(this.tableName, state);
//     // }
// }