import { Component } from '@angular/core';
import { Country } from '../../../interfaces/country';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: ``
})
export class ByCountryComponent {

  public countries: Country[] = [];


  constructor(private countriesService: CountriesService) {}

  searchByCountry(name: string): void {
    this.countriesService.searchCountry(name)
    .subscribe((countries) => {
      this.countries = countries;
    });
}
}
