import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cl2aPage } from './cl2a.page';

const routes: Routes = [
  {
    path: '',
    component: Cl2aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cl2aPageRoutingModule {}
