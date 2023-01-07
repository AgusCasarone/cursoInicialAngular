import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  deletedHeroes: string[] = [];

  deleteHeroe(): void {
    let deletedHeroe = this.heroes.shift() || '';

    this.deletedHeroes.push(deletedHeroe);
  }
}
