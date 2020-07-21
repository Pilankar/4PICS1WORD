import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L1bPageRoutingModule } from './l1b-routing.module';

import { L1bPage } from './l1b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L1bPageRoutingModule
  ],
  declarations: [L1bPage]
})
export class L1bPageModule {}
