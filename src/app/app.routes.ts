import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RatesComponent } from './rates/rates.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'rates', component: RatesComponent},
    {path: 'testimonials', component: TestimonialsComponent },
    {path: 'contact', component: ContactComponent}
];
