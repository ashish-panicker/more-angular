import { Component } from '@angular/core';
import { Signin } from '../signin';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  userInfo: Signin = new Signin('', '')

  signInSubmit(form:NgForm) {
    console.log(form.value)
  }

}
