import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from "../../services/user.service";
import { AppState, selectAuthenticationState } from "../../srore/app.states";
import { first } from "rxjs/operators";
import { User } from "src/users/models/user.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { Login } from "../../srore/actions/authentication.actions";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string = null;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthenticationState);
  }

  ngOnInit() {
    this.getState.subscribe(state => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const actionPayload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new Login(actionPayload));
  }
}
