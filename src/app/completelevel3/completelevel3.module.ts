import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Completelevel3PageRoutingModule } from './completelevel3-routing.module';

import { Completelevel3Page } from './completelevel3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Completelevel3PageRoutingModule
  ],
  declarations: [Completelevel3Page]
})
export class Completelevel3PageModule {}
