import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProductPageRoutingModule } from './detail-product-routing.module';

import { DetailProductPage } from './detail-product.page';
import {MenuToolbarPageModule} from '../sub_pages/menu-toolbar/menu-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProductPageRoutingModule,
    MenuToolbarPageModule
  ],
  declarations: [DetailProductPage]
})
export class DetailProductPageModule {}
