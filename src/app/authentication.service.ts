import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};



@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  public host: string ="http://localhost:8080/";

  jwt: string;
  username: string;
  roles: Array<string>;

  

  constructor(private http : HttpClient) { }

  login(data){
    return this.http.post(this.host+"login",data,{observe:'response'});
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
}
