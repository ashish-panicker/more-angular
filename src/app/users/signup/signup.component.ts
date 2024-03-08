import { Component } from '@angular/core';
import { Region } from '../region';
import { NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  regions: Region[] = [
    { code: 'AP', name: 'Asia Pacific' },
    { code: 'NA', name: 'North America' },
    { code: 'SA', name: 'South America' },
    { code: 'AR', name: 'Africa' },
    { code: 'EU', name: 'Europe' },
    { code: 'AU', name: 'Australia' },
  ]

  signUpForm: FormGroup = new FormGroup({
    fullName:   new FormControl('', Validators.required),
    userName:   new FormControl('', [Validators.required, Validators.minLength(4)]),
    email:      new FormControl('', [Validators.required, Validators.email]),
    password:   new FormControl('', [Validators.required, Validators.minLength(4)]),
    region:     new FormControl('', Validators.required)
  })

  signUpFormSubmit() {
    console.log(this.signUpForm.valid)
  }

  get f(){
    return this.signUpForm.controls
  }
}
