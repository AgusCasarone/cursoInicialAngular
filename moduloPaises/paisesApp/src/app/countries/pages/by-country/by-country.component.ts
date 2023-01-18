import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  public searchTerm: string = '';
  public isError: boolean = false;

  constructor(
    private countryService: CountryService
  ){}

  search() {
    this.isError = false;
    console.log( this.searchTerm );

    this.countryService.searchCountryByName( this.searchTerm )
      .subscribe( ( resp ) => {
        console.log( resp );
      }, ( err ) => {
        this.isError = true;
      });

  }

}
