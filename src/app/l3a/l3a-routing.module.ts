import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L3aPage } from './l3a.page';

const routes: Routes = [
  {
    path: '',
    component: L3aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L3aPageRoutingModule {}
