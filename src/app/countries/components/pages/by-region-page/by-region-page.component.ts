import { Component } from '@angular/core';
import { Country } from '../../../interfaces/country';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public isLoading = false;


  constructor(private countriesService: CountriesService) {}

  searchRegion(region: string): void {
    this.isLoading = true;
    this.countriesService.searchRegion(region)
    .subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
}
}
