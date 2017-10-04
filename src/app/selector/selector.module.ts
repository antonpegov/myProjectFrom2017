import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorRoutingModule } from './selector-routing.module';
import { SelectorPageComponent } from './selector-page/selector-page.component';
import { SelectorAddedComponent } from './selector-added/selector-added.component';
import { SelectorLoadedComponent } from './selector-loaded/selector-loaded.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    SelectorPageComponent, 
    SelectorAddedComponent, 
    SelectorLoadedComponent
  ]
})
export class SelectorModule { }
