import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PowerPageComponent } from "./power-page/power-page.component";

const routes: Routes = [{
    path: 'power',
    component: PowerPageComponent,
    data: {
        state: 'power',
        title: 'Power BI',
        icon: 'neo_power',
        order: 1
    }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerRoutingModule { }
