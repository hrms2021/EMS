import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeLeaveMgmtComponent } from './employee-leave-mgmt/employee-leave-mgmt.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  // { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: CreateEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: EmployeeLoginComponent },
  { path: 'leavemgmt', component: EmployeeLeaveMgmtComponent, canActivate: [AuthGuard] },
  { path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  { path: 'upload', component: FileUploadComponent, canActivate: [AuthGuard] },
  {path:'help',component:HelpComponentComponent},
  {path :'applyleave',component:ApplyLeaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }