import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L2aPage } from './l2a.page';

const routes: Routes = [
  {
    path: '',
    component: L2aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L2aPageRoutingModule {}
