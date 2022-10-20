import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {ISLOGIN, USER_ID} from "../utils/constrains";

@Injectable({
  providedIn: 'root'
})
export class AuthGardService {

  constructor(private router: Router,) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const username = sessionStorage.getItem(USER_ID)
    const login = sessionStorage.getItem(ISLOGIN)
    const userId = sessionStorage.getItem(ISLOGIN)
    if (userId && login && username) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
