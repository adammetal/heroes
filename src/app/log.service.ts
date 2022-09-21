import { Injectable } from '@angular/core';
import { Stack } from './stack';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private messages: Stack<string> = new Stack();

  constructor() { }

  addMessage(msg: string) {
    this.messages.push(msg);
  }

  popMessage() {
    this.messages.pop();
  }

  getMessages() {
    return this.messages.toArray();
  }
}
