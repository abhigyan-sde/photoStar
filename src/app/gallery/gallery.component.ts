import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  images = [
    'assets/IMG_1102.jpeg',
    'assets/IMG_2105.jpeg',
    'assets/IMG_2274.jpeg',
    'assets/IMG_2311.jpeg',
    'assets/IMG_2362.jpeg',
    'assets/IMG_2367.jpeg',
    'assets/IMG_2368.jpeg',
    'assets/IMG_2881.jpeg',
    'assets/IMG_2915.jpeg'
  ];

  selectedImageIndex: number | null = null;

  openImage(index: number) {
    this.selectedImageIndex = index;
  }

  closeImage() {
    this.selectedImageIndex = null;
  }

  prevImage() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.images.length) % this.images.length;
    }
  }

  nextImage() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
    }
  }

  get selectedImage(): string | undefined {
    return this.selectedImageIndex !== null ? this.images[this.selectedImageIndex] : undefined;
  }
  
}
