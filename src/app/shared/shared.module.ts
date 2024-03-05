import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingspinnerComponent } from './components/loadingspinner/loadingspinner.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    AboutPageComponent,
    ContactComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
    LoadingspinnerComponent,
  ],
  exports: [
    AboutPageComponent,
    ContactComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,
    LoadingspinnerComponent,
  ],
})
export class SharedModule {}
