import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiURL: string = 'https://restcountries.com/v3.1/'
  private _endpointFindByCountryName: string = this._apiURL + 'name/';

  constructor(
    private http: HttpClient
  ) { }

  searchCountryByName( searchTerm: string ): Observable<any> {

    const url = this._endpointFindByCountryName + searchTerm;

    return this.http.get( url );
  }

}
