import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageLogged } from './home-logged.page';
import {MenuPageModule} from '../../pages/sub_pages/menu/menu.module';
import {MenuToolbarPageModule} from '../../pages/sub_pages//menu-toolbar/menu-toolbar.module';
import { HomeLoggedPageRoutingModule } from './home-logged-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLoggedPageRoutingModule,
    //MenuPageModule,
    MenuToolbarPageModule
  ],
  declarations: [HomePageLogged]
})
export class HomeLoggedPageModule {}
