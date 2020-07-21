import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L3cPage } from './l3c.page';

const routes: Routes = [
  {
    path: '',
    component: L3cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L3cPageRoutingModule {}
