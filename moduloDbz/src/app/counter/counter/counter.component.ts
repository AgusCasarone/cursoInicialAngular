import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong> {{ base }}</strong>
    </h3>

    <button (click)="count(+base)">+ {{ base }}</button>
    <span>{{ num }}</span>
    <button (click)="count(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {

  public title: string = 'Contador App';
  public num: number = 10;
  public base: number = 5;

  count(value: number) {
    this.num += value;
  }

}
