import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '../app-common/app-common.module';
import { SelectorRoutingModule } from './selector-routing.module';
import { SelectorPageComponent } from './selector-page/selector-page.component';
import { SelectorAddedComponent } from './selector-added/selector-added.component';
import { SelectorLoadedComponent } from './selector-loaded/selector-loaded.component';
import { SelectorSettingsComponent } from './selector-settings/selector-settings.component';
// Кендо Грид
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    AppCommonModule,
    GridModule    
  ],
  declarations: [
    SelectorPageComponent, 
    SelectorAddedComponent, 
    SelectorLoadedComponent, SelectorSettingsComponent
  ]
})
export class SelectorModule { }
