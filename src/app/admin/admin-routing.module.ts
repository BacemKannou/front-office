import { AuthGuard } from '../login/Auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

const adminRoutes: Routes = [
    {
      path: '',
      component: AdminComponent,
      //canActivate: [AuthGuard],
      children: [
        {
          path: '',
          //canActivateChild: [AuthGuard],
          children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'users', component: UsersComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'admin', component: AdminComponent }
          ]
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    declarations: [
    ],
    exports: [
      RouterModule
    ]
  })
  export class AdminRoutingModule {}
  