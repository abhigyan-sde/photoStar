import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  images = [
    "/assets/teton.jpg",
    "/assets/IMG_1102.jpeg",
    "/assets/IMG_2105.jpeg",
    "/assets/IMG_2274.jpeg",
    "/assets/IMG_2311.jpeg",
    "/assets/IMG_2362.jpeg"
  ]
  showOverlay = true;
  slideDuration = 5;

  ngOnInit() {
    // Hide overlay after 3 seconds
    setTimeout(() => (this.showOverlay = false), 3000);
  }

  getDelay(index: number): string {
    return `${this.slideDuration * index}s`;
  }
}
