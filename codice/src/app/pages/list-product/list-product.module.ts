import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProductPageRoutingModule } from './list-product-routing.module';

import { ListProductPage } from './list-product.page';
import {MenuPageModule} from 'src/app/pages/sub_pages/menu/menu.module';
import {MenuToolbarPageModule} from 'src/app/pages/sub_pages/menu-toolbar/menu-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProductPageRoutingModule,
    MenuPageModule,
    MenuToolbarPageModule
  ],
  declarations: [ListProductPage]
})
export class ListProductPageModule {}
