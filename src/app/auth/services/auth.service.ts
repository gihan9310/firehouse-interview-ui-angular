import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment.prod";
import {ISLOGIN, USER_ID, USER_NAME} from "../../utils/constrains";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  login(loginDto: any) {
    this.httpClient.post<any>(environment.BASE_USRL + `auth/login`, loginDto).subscribe(res => {
      if (res) {
        console.log(res)
        if (res.username && res.login) {
          sessionStorage.setItem(ISLOGIN, res.isLogin);
          sessionStorage.setItem(USER_NAME, res.username);
          sessionStorage.setItem( USER_ID, res.userId);

          this.router.navigate(['']);
          //  login success
          //   this.router.
        } else {
          alert('invalid user name or password.');
        }
      }
    })
  }
}
