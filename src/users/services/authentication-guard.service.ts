import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuardService {
  constructor(
    public router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(): boolean {
    const isLoggedIn = this.authenticationService.isLoggedIn();
    if (!isLoggedIn) {
      // tslint:disable-next-line:no-debugger
      debugger;
      this.router.navigateByUrl("/users/sign-in");
      return false;
    }
    return true;
  }
}
