import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingPageComponent } from "./reporting-page/reporting-page.component";

const routes: Routes = [{
    path: 'reporting',
    component: ReportingPageComponent,
    data: {
        state: 'reporting',
        title: 'Reporting Services',
        icon: 'neo_reporting',
        order: 2
    }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
