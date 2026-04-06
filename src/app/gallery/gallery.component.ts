import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CloudinaryService } from '../service/cloudinary.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit{
  images: string[] = []
  selectedImageIndex: number | null = null;

  constructor(private cloudinaryService : CloudinaryService){}

  ngOnInit(): void {
    this.cloudinaryService.getImages().subscribe({
      next: (data) => this.images = data,
      error: (err) => console.log('Error loading images', err)
    });
  }

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
