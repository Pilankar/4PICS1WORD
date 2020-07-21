import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cl2CPage } from './cl2-c.page';

const routes: Routes = [
  {
    path: '',
    component: Cl2CPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cl2CPageRoutingModule {}
