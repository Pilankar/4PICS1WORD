import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cl2CPageRoutingModule } from './cl2-c-routing.module';

import { Cl2CPage } from './cl2-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cl2CPageRoutingModule
  ],
  declarations: [Cl2CPage]
})
export class Cl2CPageModule {}
