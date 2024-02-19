import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SharedComponent,
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactComponent,
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactComponent,
  ],
})
export class SharedModule {}
