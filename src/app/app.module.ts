import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeLeaveMgmtComponent } from './employee-leave-mgmt/employee-leave-mgmt.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AuthGuard} from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    EmployeeLoginComponent,
    EmployeeLeaveMgmtComponent,
    FileUploadComponent,
    HeaderComponentComponent,
    ProfileComponent,
    HelpComponentComponent,
    ApplyLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ToastrModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }