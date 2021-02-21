import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  public host: string ="http://localhost:8080/";

  jwt: string;
  username: string;
  roles: Array<string>;
  var:boolean;
  redirectUrl:String;

  constructor(private http : HttpClient) { }

  login(data){
    return this.http.post(this.host+"login",data,{observe:'response'});
  }

  logout(){
    localStorage.removeItem('token');
    this.jwt=null;
    this.roles=null;
    this.username=null;
  }

  saveToken(jwt: string){
    localStorage.setItem('token', jwt);
    this.jwt=jwt;
    this.parseJWT();
  }
  parseJWT(){
    let jwtHelper= new JwtHelperService();
    let objJWT= jwtHelper.decodeToken(this.jwt);
    console.log(objJWT);
    this.username= objJWT.sub;
    console.log(this.username)
    this.roles= objJWT.roles;

  }

  isAuthenticated(){
    return this.jwt !=null;
  }

  hasRoleAdmin():  boolean{ 
    return this.roles && this.roles.indexOf('ADMIN')>=0 ;
  }

  loadToken(){
    this.jwt=localStorage.getItem('token');
    if(this.jwt!=null){
      this.parseJWT();
    }
  }

  getBeAuthenticated(){
    this.jwt='kannou bacem';
  }
     
}
