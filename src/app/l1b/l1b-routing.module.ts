import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L1bPage } from './l1b.page';

const routes: Routes = [
  {
    path: '',
    component: L1bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L1bPageRoutingModule {}
