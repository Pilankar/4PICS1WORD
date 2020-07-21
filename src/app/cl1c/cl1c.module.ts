import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cl1cPageRoutingModule } from './cl1c-routing.module';

import { Cl1cPage } from './cl1c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cl1cPageRoutingModule
  ],
  declarations: [Cl1cPage]
})
export class Cl1cPageModule {}
