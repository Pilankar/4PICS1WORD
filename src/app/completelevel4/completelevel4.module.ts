import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Completelevel4PageRoutingModule } from './completelevel4-routing.module';

import { Completelevel4Page } from './completelevel4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Completelevel4PageRoutingModule
  ],
  declarations: [Completelevel4Page]
})
export class Completelevel4PageModule {}
