import { Component, OnInit } from '@angular/core';
import { CloudinaryService } from '../service/cloudinary.service';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  images: string[] = []
  showOverlay = true;
  slideDuration = 5;

  constructor(private cloudinaryService : CloudinaryService){}

  ngOnInit() {
    // Hide overlay after 3 seconds
    this.cloudinaryService.getImages().subscribe({
      next: (data) => this.images = data,
      error: (err) => console.log('Error loading images', err)
    });
    setTimeout(() => (this.showOverlay = false), 3000);
  }

  getDelay(index: number): string {
    return `${this.slideDuration * index}s`;
  }
}
