import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectorPageComponent } from './selector-page/selector-page.component';
import { SelectorAddedComponent } from './selector-added/selector-added.component';
import { SelectorLoadedComponent } from './selector-loaded/selector-loaded.component';
import { SelectorSettingsComponent } from './selector-settings/selector-settings.component';

const routes: Routes = [{
    path: 'selector',
    component: SelectorPageComponent,
    data: {
        state: 'selector',
        title: 'Селектор',
        icon: 'neo_selector',
        order: 4,
        menu: true
    },
    children: [
        //{ path: 'added', component: SelectorAddedComponent, outlet: 'selector'},
        //{ path: 'loaded', component: SelectorLoadedComponent, outlet: 'selector'},
        { path: 'added', component: SelectorAddedComponent},
        { path: 'loaded', component: SelectorLoadedComponent},
        { path: 'settings', component: SelectorSettingsComponent}
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectorRoutingModule { }
