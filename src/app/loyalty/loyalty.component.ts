import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css'],
})
export class LoyaltyComponent {
  @Input() skills: {text: string, cost: number}[] = [];

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  change(delta: number | string) {
    this.counter += Number(delta);
    this.counterChange.emit(this.counter);
  }

  setTo(value: number | string) {
    this.counter = Number(value);
    this.counterChange.emit(this.counter);
  }
}
