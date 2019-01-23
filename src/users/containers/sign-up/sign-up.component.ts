import { Component, OnInit } from '@angular/core';
import { User } from 'src/users/models/user.model';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserService,
  ) {
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;

    /*
      this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
     */
  }


  registerUser() {
    const token = this.makeToken();
    const DUMMYUSER = {
      email: 'ex@ex.com',
      password: 'example',
      token
    };
    this.userService.registerUser(DUMMYUSER).subscribe(user => {
      const userResponse = user;
      console.log(userResponse);
      // tslint:disable-next-line:no-debugger
      debugger;
      this.userService.storeUserData(userResponse.token);
      this.router.navigate(['/products/']);
    });
  }


  // FIXME: DELETE AFTER CREATE REAL BACK END
  makeToken() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 150; ++i) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
