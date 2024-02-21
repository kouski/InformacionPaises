import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './components/pages/by-capital-page/by-capital-page.component';
import { ByCountryComponent } from './components/pages/by-country-page/by-country.component';
import { ByRegionPageComponent } from './components/pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './components/pages/country-page/by-country-page.component';

const routes:Routes = [
  {
    path:'by-capital',
    component:ByCapitalPageComponent,
  },
  {
    path:'by-country',
    component:ByCountryComponent,
  },
  {
    path:'by-region',
    component:ByRegionPageComponent,
  },
  {
    path:'by/:id',
    component:ByCountryPageComponent,
  },
  {
    path: '**',
    redirectTo:'by-capital'
  }

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
