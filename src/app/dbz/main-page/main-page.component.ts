import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power:  5500
    }
  ];

  newCharacter : Character = {
    name: '',
    power: NaN
  }

  addNewCharacter( arg: Character ){
    this.characters.push( arg );
  }

  constructor(
    private dbzService: DbzService
    ) {}

}
