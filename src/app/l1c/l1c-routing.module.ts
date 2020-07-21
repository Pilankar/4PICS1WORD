import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L1cPage } from './l1c.page';

const routes: Routes = [
  {
    path: '',
    component: L1cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L1cPageRoutingModule {}
