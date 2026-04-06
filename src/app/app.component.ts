import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CloudinaryService } from './service/cloudinary.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  private ctrlPressed = false;
  constructor(private cloudinaryService: CloudinaryService) { }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {

    if (event.key === 'Control') {
      this.ctrlPressed = true;
    }

    if (this.ctrlPressed && event.key.toLowerCase() === 'm') {
      console.log('🔄 Manual image refresh triggered');

      // Trigger refresh
      this.cloudinaryService.getImages(true).subscribe();

      // reset
      this.ctrlPressed = false;
    }
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.ctrlPressed = false;
    }
  }
}
