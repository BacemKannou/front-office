import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  title = 'MyProject';

  constructor(private router : Router , private authenticationService : AuthenticationService){

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
    return this.authenticationService.isAuthenticated();
  }
  ngOnInit(){
    this.authenticationService.loadToken();
  }
 

}
