import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AdminComponent } from './components/admin/admin.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path : 'dashboard',component:DashboardComponent},
  { path : 'member/:id',component:MemberDetailComponent },
  { path : 'login',component:LoginComponent },
  { path : 'admin',component:AdminComponent }
  // { path: '* '}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
