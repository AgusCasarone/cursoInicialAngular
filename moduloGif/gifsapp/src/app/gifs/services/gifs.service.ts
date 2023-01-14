import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private _apiUrl: string = 'https://api.giphy.com/v1/gifs';
  private _apiKey: string = 'uVKcq6Xh4N5P2AEUCs5kx6TRmaJuLWz2';
  private _history: string[] = [];

  public results: Gif[] = [];

  // TODO: fix type
  public get history(): string[] {
    return [...this._history];
  }

  constructor(
    private http: HttpClient
  ){
      this._history = JSON.parse( localStorage.getItem( 'history' )!) || [];
  }

  searchGifs(query: string) {

    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history = this._history.splice(0, 10);
      this._history.unshift(query);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${ this._apiUrl }/search`, { params })
      .subscribe( (response ) => {
        this.results = response.data;
      } )
  }
}
