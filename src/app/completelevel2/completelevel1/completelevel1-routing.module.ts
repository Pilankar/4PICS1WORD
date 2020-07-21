import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Completelevel1Page } from './completelevel1.page';

const routes: Routes = [
  {
    path: '',
    component: Completelevel1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Completelevel1PageRoutingModule {}
