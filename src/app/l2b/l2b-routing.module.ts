import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L2bPage } from './l2b.page';

const routes: Routes = [
  {
    path: '',
    component: L2bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L2bPageRoutingModule {}
