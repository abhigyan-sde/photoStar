import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RatesComponent } from './rates/rates.component';
import { AvailabilityComponent } from './availability/availability.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'rates', component: RatesComponent},
    {path: 'availability', component: AvailabilityComponent},
    { path: 'testimonials', component: TestimonialsComponent }
];
