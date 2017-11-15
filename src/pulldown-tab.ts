import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ion-pulldown-tab',
  template: `
<ion-icon name="reorder"></ion-icon>
`
})
export class IonPulldownTabComponent{
  @Output() onClick = new EventEmitter<any>();

  @HostListener('click', ['$event'])
  _onClick(evt){
    this.onClick.emit();
  }

  constructor() { }
}
