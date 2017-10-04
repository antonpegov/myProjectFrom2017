import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeolocationPageComponent } from "./geolocation-page/geolocation-page.component";

const routes: Routes = [{
    path: 'geolocation',
    component: GeolocationPageComponent,
    data: {
        state: 'geolocation',
        title: 'Геолокация',
        icon: 'neo_geolocation',
        order: 3
    }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeolocationRoutingModule { }
