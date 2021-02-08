import { Compiler, Component, OnInit, Output, EventEmitter, SimpleChanges, Input, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  @Output() logoutVar: EventEmitter<boolean> = new EventEmitter<boolean>();
 // @Input() showHead=false;
  constructor(
    private router: Router,
    private appComp: AppComponent,
    private _compiler: Compiler,
    private cd: ChangeDetectorRef
  ) { }

  roleadmin = false;
  roleuser = false;

  ngOnInit() {
    const roleId = Number(localStorage.getItem("roleid"));
    console.log(roleId)
    if (roleId == 1) {
      this.roleadmin = true;
    } else {
      this.roleuser = true;
    }
  }

  logout() {
    localStorage.clear();
    console.log('logout clicked !')
  
    this._compiler.clearCache();
    this.appComp.setshowHead(false);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        reload: true
      }
    };
    this.router.navigateByUrl('/login', navigationExtras)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onNgChange clicked !');
    this.cd.detectChanges();
    this.logoutVar.emit(false);
    
  }
}
