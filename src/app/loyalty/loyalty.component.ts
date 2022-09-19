import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css'],
})
export class LoyaltyComponent {
  @Input() first: number | string = 1;
  @Input() sec: number | string = -2;
  @Input() ult: number | string = -7;

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  firstSkill() {
    this.change(Number(this.first));
  }

  secondSkill() {
    this.change(Number(this.sec));
  }

  ultimateSkill() {
    this.change(Number(this.ult));
  }

  change(delta: number) {
    this.counter += delta;
    this.counterChange.emit(this.counter);
  }
}
