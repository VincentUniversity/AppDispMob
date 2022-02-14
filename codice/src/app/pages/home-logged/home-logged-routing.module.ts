import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageLogged } from './home-logged.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageLogged,
  },
  {
    path: 'detail-product/:id',
    loadChildren: () => import('../detail-product/detail-product.module').then( m => m.DetailProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLoggedPageRoutingModule {}
