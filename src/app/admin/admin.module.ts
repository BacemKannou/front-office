import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [DashboardComponent, AdminComponent, UsersComponent, ProjectsComponent, AdminSidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
  ]
})
export class AdminModule { }
