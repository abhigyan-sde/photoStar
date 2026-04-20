import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rates',
  imports: [CommonModule],
  templateUrl: './rates.component.html',
  styleUrl: './rates.component.css'
})
export class RatesComponent {
  packages = [
    {
      name: 'Silver',
      price: '$100',
      description: '30-minute session • 10 edited photos'
    },
    {
      name: 'Gold',
      price: '$200',
      description: '1-hour session • 30 edited photos'
    },
    {
      name: 'Platinum',
      price: '$400',
      description: '4-hour session • 70 edited photos'
    }
  ];
}
