import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
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
