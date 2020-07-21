import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cl1bPageRoutingModule } from './cl1b-routing.module';

import { Cl1bPage } from './cl1b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cl1bPageRoutingModule
  ],
  declarations: [Cl1bPage]
})
export class Cl1bPageModule {}
