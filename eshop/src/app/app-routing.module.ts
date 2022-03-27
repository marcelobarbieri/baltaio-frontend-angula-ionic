import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './guards/authorized.guard';
import { FramePage } from './pages/shared/frame/frame.page';

const routes: Routes = [
  {
    path: '',
    component: FramePage,
    canActivate: [AuthorizedGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module')
          .then(m => m.HomePageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./pages/store/orders/orders.module')
          .then(m => m.OrdersPageModule)
      },
      {
        path: 'orders/:number',
        loadChildren: () => import('./pages/store/orders-details/orders-details.module')
          .then(m => m.OrdersDetailsPageModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/account/login/login.module')
      .then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
