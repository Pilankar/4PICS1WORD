import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Completelevel2Page } from './completelevel2.page';

const routes: Routes = [
  {
    path: '',
    component: Completelevel2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Completelevel2PageRoutingModule {}
