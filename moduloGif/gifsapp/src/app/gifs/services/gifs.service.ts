import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private _apiUrl: string = 'api.giphy.com/v1/gifs/search';
  private _apiKey: string = 'uVKcq6Xh4N5P2AEUCs5kx6TRmaJuLWz2';
  private _history: string[] = [];

  public results: Gif[] = [];

  // TODO: arreglar tipado
  public get history(): string[] {
    return [...this._history];
  }

  constructor(
    private http: HttpClient
  ){
      this._history = JSON.parse( localStorage.getItem( 'history' )!) || [];
      // lastResults
  }

  searchGifs(query: string) {

    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history = this._history.splice(0, 10);
      this._history.unshift(query);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=uVKcq6Xh4N5P2AEUCs5kx6TRmaJuLWz2&q=${ query }&limit=10`)
      .subscribe( (response ) => {
        console.log( response.data );
        this.results = response.data;
      } )
  }
}
