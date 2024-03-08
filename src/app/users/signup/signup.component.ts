import { Component } from '@angular/core';
import { Region } from '../region';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgFor],
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
}
