import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cl2bPage } from './cl2b.page';

const routes: Routes = [
  {
    path: '',
    component: Cl2bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cl2bPageRoutingModule {}
