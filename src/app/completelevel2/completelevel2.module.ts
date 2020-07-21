import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Completelevel2PageRoutingModule } from './completelevel2-routing.module';

import { Completelevel2Page } from './completelevel2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Completelevel2PageRoutingModule
  ],
  declarations: [Completelevel2Page]
})
export class Completelevel2PageModule {}
