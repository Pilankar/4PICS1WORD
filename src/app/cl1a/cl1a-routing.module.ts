import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cl1aPage } from './cl1a.page';

const routes: Routes = [
  {
    path: '',
    component: Cl1aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cl1aPageRoutingModule {}
