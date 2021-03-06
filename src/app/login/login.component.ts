import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jwt: string;

  constructor(private authenticationService : AuthenticationService,  private router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin(data){
 /*   this.authenticationService.login(data).subscribe(response =>{
        console.log(response.headers.get('Authorization'))
        let jwt=response.headers.get('Authorization');
        this.authenticationService.saveToken(jwt);
      }, error=> {
      console.log("error in login ")
    });
    console.log(this.jwt)*/

    this.router.navigateByUrl('/products')
   
  }

}
