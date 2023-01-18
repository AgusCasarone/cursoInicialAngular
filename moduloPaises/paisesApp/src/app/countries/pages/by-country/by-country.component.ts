import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  public searchTerm: string = '';

  constructor(
    private countryService: CountryService
  ){}

  search() {
    console.log( this.searchTerm );

    this.countryService.searchCountryByName( this.searchTerm )
      .subscribe( resp => {
        console.log( resp );
      });

  }

}
