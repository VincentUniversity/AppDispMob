import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductPage } from './list-product.page';

const routes: Routes = [
  {
    path: '',
    component: ListProductPage
  },
  {
    path: 'detail-product/:id',
    loadChildren: () => import('../detail-product/detail-product.module').then( m => m.DetailProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProductPageRoutingModule {}
