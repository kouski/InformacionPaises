import { Component, OnInit } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: ``
})
export class ByCountryComponent implements OnInit  {

  public countries: Country[] = [];
  public isLoading = false;
  public initialValue:string = '';


  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  } 

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term)
    .subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
}
}
