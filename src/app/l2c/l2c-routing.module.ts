import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L2cPage } from './l2c.page';

const routes: Routes = [
  {
    path: '',
    component: L2cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L2cPageRoutingModule {}
