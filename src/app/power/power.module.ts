import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { PowerRoutingModule } from './power-routing.module';
import { PowerPageComponent } from './power-page/power-page.component';

@NgModule({
  imports: [
    CommonModule,
    PowerRoutingModule,
    AppCommonModule
  ],
  declarations: [PowerPageComponent]
})
export class PowerModule { }
