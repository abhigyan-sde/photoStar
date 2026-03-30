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
      name: 'Bronze',
      price: '$200',
      description: '1-hour session • 15 edited photos • 1 location'
    },
    {
      name: 'Silver',
      price: '$350',
      description: '2-hour session • 30 edited photos • 1-2 locations'
    },
    {
      name: 'Gold',
      price: '$500',
      description: 'Half-day session • 60 edited photos • Multiple locations'
    },
    {
      name: 'Platinum',
      price: '$800',
      description: 'Full-day session • 100+ edited photos • Unlimited locations + prints'
    }
  ];
}
