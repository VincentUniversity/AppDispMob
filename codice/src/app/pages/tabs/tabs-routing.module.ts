import { HomeLoggedPageModule } from './../home-logged/home-logged.module';
import { FavoritesPageModule } from './../favorites/favorites.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,    
      children: [
        {
          path: 'list_product',
          loadChildren: () => import('../list-product/list-product.module').then(m => m.ListProductPageModule)
        },
        {
          path:"favorite", 
          loadChildren:()=> import('src/app/pages/favorites/favorites.module').then(res=> res.FavoritesPageModule)
        },
        {
          path:"profile", 
          loadChildren:()=> import('src/app/pages/profile/profile.module').then(res=> res.ProfilePageModule)
        },
        {
          path:"home-logged", 
          loadChildren:()=> import('src/app/pages/home-logged/home-logged.module').then(res=> res.HomeLoggedPageModule)
        }
    ]
  },
  {
    path: "",
    redirectTo: "tabs/home-logged",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TabsPageRoutingModule {}
