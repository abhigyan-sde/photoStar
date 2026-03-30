import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    { text: 'Absolutely stunning photos! Captured every moment beautifully.', author: 'Jane D.' },
    { text: 'Professional and creative — highly recommended!', author: 'Mark R.' },
    { text: 'Their work added magic to our memories. Thank you!', author: 'Lisa K.' }
  ];
}
