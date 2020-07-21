import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L2bPageRoutingModule } from './l2b-routing.module';

import { L2bPage } from './l2b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L2bPageRoutingModule
  ],
  declarations: [L2bPage]
})
export class L2bPageModule {}
