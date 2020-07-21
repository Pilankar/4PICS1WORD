import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L3bPage } from './l3b.page';

const routes: Routes = [
  {
    path: '',
    component: L3bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L3bPageRoutingModule {}
