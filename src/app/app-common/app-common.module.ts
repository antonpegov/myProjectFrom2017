import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// Kendo UI
import { IntlModule } from '@progress/kendo-angular-intl';
// Pipes library
import { NgPipesModule } from 'ngx-pipes';
// Google Material
import {
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdSidenavModule

} from '@angular/material';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    imports: [
        CommonModule,
        IntlModule,             // Модуль интернационализации
        NgPipesModule,          // Набор полезных фильтров        
        FlexLayoutModule,
        MdToolbarModule,
        MdListModule,
        MdIconModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdSidenavModule

    ],
    declarations: [AlertComponent],
    exports: [
        FlexLayoutModule,
        IntlModule,
        NgPipesModule,
        MdToolbarModule,
        MdListModule,
        MdIconModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdSidenavModule
    ]
})
export class AppCommonModule { }
