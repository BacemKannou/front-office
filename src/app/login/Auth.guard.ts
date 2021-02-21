import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild, CanLoad, Router, Route, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthenticationService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const url: string = state.url;
  
      return this.checkLogin(url);
    }
  
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
    }
  
    canLoad(route: Route): boolean {
      const url = `/${route.path}`;
  
      return this.checkLogin(url);
    }
  
    checkLogin(url: string): boolean {
      if (this.authService.isAuthenticated) { return true; }
  
      // Store the attempted URL for redirecting
      this.authService.redirectUrl = url;
  
      // Create a dummy session id
      const sessionId = 123456789;
  
      // Set our navigation extras object
      // that contains our global query params and fragment
      const navigationExtras: NavigationExtras = {
        queryParams: { session_id: sessionId },
        fragment: 'anchor'
      };
  
      // Navigate to the login page with extras
      this.router.navigate(['/login'], navigationExtras);
      return false;
    }
  }