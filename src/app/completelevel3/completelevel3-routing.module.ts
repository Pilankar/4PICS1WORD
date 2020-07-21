import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Completelevel3Page } from './completelevel3.page';

const routes: Routes = [
  {
    path: '',
    component: Completelevel3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Completelevel3PageRoutingModule {}
