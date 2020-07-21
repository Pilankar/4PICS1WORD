import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cl1bPage } from './cl1b.page';

const routes: Routes = [
  {
    path: '',
    component: Cl1bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cl1bPageRoutingModule {}
