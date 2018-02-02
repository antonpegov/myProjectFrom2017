// Стандартные:
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Модули:
import { Ng2Webstorage, LocalStorageService, SessionStorageService} from "ngx-webstorage";
import { AppCommonModule } from './app-common/app-common.module';
import { AppRoutingModule } from './app-routing.module';
import { SelectorModule } from './selector/selector.module';
import { SelectorRoutingModule } from './selector/selector-routing.module';
import { PowerModule } from './power/power.module';
import { PowerRoutingModule } from './power/power-routing.module';
import { ReportingModule } from './reporting/reporting.module';
import { ReportingRoutingModule } from './reporting/reporting-routing.module';
import { GeolocationModule } from './geolocation/geolocation.module';
import { GeolocationRoutingModule } from './geolocation/geolocation-routing.module';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import {ReversePipe} from 'ngx-pipes/src/app/pipes/array/reverse';
// Сервисы:
import { AppToolbarService, UserService, NavigationService, HardcodeService } from "./_services/";
// Компоненты:
import { AppComponent } from './app.component';
import { SubnavigationComponent } from './app-common/subnavigation/subnavigation.component';
import { UserWidgetComponent } from './user/user-widget/user-widget.component';
import { InitialPipe, CapitalizePipe } from './_pipes/';
import { SettingsWidgetComponent } from './app-common/settings-widget/settings-widget.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InitialPipe,
    CapitalizePipe,
    // ReversePipe,
    UserWidgetComponent,
    SubnavigationComponent,
    SettingsWidgetComponent
  ],
  imports: [
      HttpModule,
      HttpClientModule, // Обновленный http клиент
      // RouterModule,
      Ng2Webstorage,    // Доступ к localstorage
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AppRoutingModule,
      AppCommonModule,
      PowerModule,
      PowerRoutingModule,
      ReportingModule,
      ReportingRoutingModule,
      GeolocationModule,
      GeolocationRoutingModule,
      UserModule,
      UserRoutingModule,
      SelectorModule,
      SelectorRoutingModule
  ],
  providers: [
    UserService,
    AppToolbarService,
    LocalStorageService,
    SessionStorageService,
    NavigationService,
    HardcodeService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
