import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectorPageComponent } from './selector-page/selector-page.component';
import { SelectorAddedComponent } from './selector-added/selector-added.component';
import { SelectorLoadedComponent } from './selector-loaded/selector-loaded.component';

const routes: Routes = [{
    path: 'selector',
    component: SelectorPageComponent,
    data: {
        state: 'selector',
        title: 'Селектор',
        icon: 'neo_selector',
        order: 4
    },
    children: [
        //{ path: 'added', component: SelectorAddedComponent, outlet: 'selector'},
        //{ path: 'loaded', component: SelectorLoadedComponent, outlet: 'selector'},
        { path: 'added', component: SelectorAddedComponent},
        { path: 'loaded', component: SelectorLoadedComponent}
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectorRoutingModule { }
