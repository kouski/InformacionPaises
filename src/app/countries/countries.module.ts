import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { ByCapitalPageComponent } from './components/pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './components/pages/country-page/by-country-page.component';
import { ByRegionPageComponent } from './components/pages/by-region-page/by-region-page.component';
import { ByCountryComponent } from './components/pages/by-country-page/by-country.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';




@NgModule({
  imports: [CommonModule, CountriesRoutingModule,SharedModule],
  declarations: [
    CountriesComponent,
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    ByCountryComponent,
    CountryTableComponent,

  ],
})
export class CountriesModule {}
