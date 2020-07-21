import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cl1aPageRoutingModule } from './cl1a-routing.module';

import { Cl1aPage } from './cl1a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cl1aPageRoutingModule
  ],
  declarations: [Cl1aPage]
})
export class Cl1aPageModule {}
