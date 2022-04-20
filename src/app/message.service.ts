import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: string[] = [];

  constructor() { }

  public addMessage = (message: string) => {
    this.messages.push(message);
  }

  public clearMessage = () => {
    this.messages = [];
  }

  public getMessages = (): String[] => {
    return this.messages;
  }
}
