import { Component } from '@angular/core';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SigninComponent, SignupComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  signInForm: boolean = true
  signUpForm: boolean = false


  loadSignInForm(): void {
    this.signInForm = true
    this.signUpForm = false
  }

  loadSignUpForm(): void {
    this.signInForm = false
    this.signUpForm = true
  }
}
