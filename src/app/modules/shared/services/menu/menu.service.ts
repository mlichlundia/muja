import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public isOpen: boolean = false

  public toggleOpen() {
    this.isOpen = !this.isOpen
  }
}
