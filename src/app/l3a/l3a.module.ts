import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L3aPageRoutingModule } from './l3a-routing.module';

import { L3aPage } from './l3a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L3aPageRoutingModule
  ],
  declarations: [L3aPage]
})
export class L3aPageModule {}
