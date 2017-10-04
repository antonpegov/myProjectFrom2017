import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [{
  path: 'user',
  component: UserPageComponent,
  data: {
      title: 'Профиль',
      icon: '',
      oreder: false
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
