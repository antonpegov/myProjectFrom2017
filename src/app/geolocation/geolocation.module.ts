import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from "../app-common/app-common.module";
import { GeolocationRoutingModule } from './geolocation-routing.module';
import { GeolocationPageComponent } from './geolocation-page/geolocation-page.component';

@NgModule({
  imports: [
    CommonModule,
    GeolocationRoutingModule,
    AppCommonModule
  ],
  declarations: [GeolocationPageComponent]
})
export class GeolocationModule { }
