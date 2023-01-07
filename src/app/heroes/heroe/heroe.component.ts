import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  public name: string = 'Ironman';
  public age: number = 45;

  get upperName(): string {
    return this.name.toUpperCase();
  }

  obteinName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

}
