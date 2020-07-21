import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cl1cPage } from './cl1c.page';

const routes: Routes = [
  {
    path: '',
    component: Cl1cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cl1cPageRoutingModule {}
