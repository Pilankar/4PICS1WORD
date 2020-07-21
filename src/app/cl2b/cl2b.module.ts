import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cl2bPageRoutingModule } from './cl2b-routing.module';

import { Cl2bPage } from './cl2b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cl2bPageRoutingModule
  ],
  declarations: [Cl2bPage]
})
export class Cl2bPageModule {}
