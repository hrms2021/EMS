import { Component } from '@angular/core';
import { Router, NavigationStart, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Employees Management System';
  showNav=true;
  showHead = false;

  getshowHead(){
    return this.showHead;
  }

  logout($event){
    console.log('event recieved !');
    this.showHead=false;
  }

  setshowHead(value:Boolean){
    this.showHead=false;
  }
  constructor(
    router: Router
  ) {
    router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/Login' || event['urlAfterRedirects'] == '/Login') {
          this.showHead = false;
        } else if (event['url'] == '/' || event['url'] == undefined || event['url'] == null) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });

   
    
  }
}
