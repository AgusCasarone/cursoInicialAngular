import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  public searchTerm: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];

  constructor(
    private countryService: CountryService
  ){}

  search() {
    this.isError = false;
    console.log( this.searchTerm );

    this.countryService.searchCountryByName( this.searchTerm )
      .subscribe({
        next: ( countries: Country[] ) => {
          console.log( countries );
          this.countries = countries;
        },

        error: ( error ) => {
          console.error( error );
          this.isError = true;
          this.countries = [];
        }
      });
  }

}
