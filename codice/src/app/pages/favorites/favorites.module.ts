import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import {MenuPageModule} from '../../pages/sub_pages/menu/menu.module';
import {MenuToolbarPageModule} from '../../pages/sub_pages/menu-toolbar/menu-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    MenuPageModule,
    MenuToolbarPageModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
