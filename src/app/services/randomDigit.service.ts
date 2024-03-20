import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetIdService {
  constructor() {}

  public getRandomId(): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let id = '';
    for (let i = 0; i < 8; i++) {
      id += characters[Math.floor(Math.random() * charactersLength)];
    }
    return id;
  }
}
