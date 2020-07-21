import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Completelevel1PageRoutingModule } from './completelevel1-routing.module';

import { Completelevel1Page } from './completelevel1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Completelevel1PageRoutingModule
  ],
  declarations: [Completelevel1Page]
})
export class Completelevel1PageModule {}
