
import { Component, OnInit, EventEmitter, Output, Compiler } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
//import { SharedService } from '../../services/shared/shared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { LoginserviceService } from '../services/loginservice.service';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  resp;
  loginForm: FormGroup;
  formSubmitted = false;
  show = false;
  statusShow = false;
  showNav = true;
  private currentLoggedIn = this.loginservice.getloggedIn();

  getLoggedIn() {
    return this.currentLoggedIn;
  }
  @Output() userRole: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginservice: LoginserviceService,
    private toaster:ToastrService
    //private sharedService: SharedService,
    //private _compiler: Compiler
  ) {
  }
  ngOnChanges() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required])
    });
    // this._compiler.clearCache();
    // this.sharedService.clearAllLocalStorage();
  }

  showPwd() {
    this.statusShow = !this.statusShow;
    this.show = !this.show;
  }

  onClick() {
    console.log("submit clicked");
  }

  userTypes = [
    { id: 1, type: "Admin" },
    { id: 2, type: "User" }
  ]



  onTryLogin(request) {
    console.log(request)
    console.log("auth service called");
    this.loginservice.auth(request.value).subscribe((response: Response) => {
      console.log(response);
      const resp = response['body'];
      if (response) {
        const roleId = response['roleId'];
        // const roleId = respObj.roleId;
        localStorage.setItem("auth", "true");
        localStorage.setItem("roleid", roleId);
        localStorage.setItem("id", response['id']);
        this.toaster.success("Welcome to Employee Management System");
        this.loginservice.setloggedIn(true);
        this.router.navigate(['/profile']);
      }
    },
      (error: Response) => {
        if (error.status == 403)
         // alert('Invalid User or Password');
         this.toaster.error('Invalid user or Password');
      }

    )

    // gotoList() {
    //   this.router.navigate(['/employees']);
    // }

  }
}
