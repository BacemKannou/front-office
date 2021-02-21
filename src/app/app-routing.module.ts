import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from './login/Auth.guard';
import { ProductsComponent } from './products/products.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { AdminComponent } from './admin/admin/admin.component';

/*
const routes: Routes = [
  {path:"productDetails/:id", component:ProductDetailsComponent,
  canActivate: [AuthGuard]},
  {path:"login", component:LoginComponent},
  { path: '**', redirectTo: 'login' }
];*/
const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {path:"productDetails/:id", component:ProductDetailsComponent},
  {path:"login", component:LoginComponent},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    //canLoad: [AuthGuard]
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
//  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
