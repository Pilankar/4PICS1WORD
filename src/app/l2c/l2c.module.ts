import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L2cPageRoutingModule } from './l2c-routing.module';

import { L2cPage } from './l2c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L2cPageRoutingModule
  ],
  declarations: [L2cPage]
})
export class L2cPageModule {}
