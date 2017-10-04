import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingPageComponent } from './reporting-page/reporting-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReportingRoutingModule,
    AppCommonModule
  ],
  declarations: [ReportingPageComponent]
})
export class ReportingModule { }
