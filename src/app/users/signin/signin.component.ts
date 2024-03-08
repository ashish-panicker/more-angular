import { Component } from '@angular/core';
import { Signin } from '../signin';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  userInfo: Signin = new Signin('', '')

  signInSubmit() {
    console.log(this.userInfo)
  }

}
