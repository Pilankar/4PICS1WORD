import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L1aPage } from './l1a.page';

const routes: Routes = [
  {
    path: '',
    component: L1aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L1aPageRoutingModule {}
