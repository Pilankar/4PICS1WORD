import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cl2aPageRoutingModule } from './cl2a-routing.module';

import { Cl2aPage } from './cl2a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cl2aPageRoutingModule
  ],
  declarations: [Cl2aPage]
})
export class Cl2aPageModule {}
