import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Completelevel4Page } from './completelevel4.page';

const routes: Routes = [
  {
    path: '',
    component: Completelevel4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Completelevel4PageRoutingModule {}
