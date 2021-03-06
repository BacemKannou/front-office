import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyProject';

  constructor(private router : Router , private authenticationService : AuthenticationService){
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  onClickLogin(){
    this.router.navigate(['login']);
  }
  onClickLogout(){
    this.authenticationService.logout();
  }

  hasRoleAdmin(){
    return this.authenticationService.hasRoleAdmin();
  }

  isAuthenticated(){
    return this.authenticationService.getBeAuthenticated();
  }
  ngOnInit(){
    this.authenticationService.loadToken();
  }
  
}
