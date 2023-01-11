import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Input() newCharacter : Character = {
    name: '',
    power: 0
  }

  constructor(
    private dbzService: DbzService
  ) {}

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  addCharacter() {

    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    console.log(this.newCharacter);
    
    // this.onNewCharacter.emit(this.newCharacter);
    this.dbzService.addCharacter( this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0
    }
  }

}
