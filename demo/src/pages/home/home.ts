import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { NavController, List } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('list') list: List ;

  constructor(public navCtrl: NavController, public renderer:Renderer2, public elRef:ElementRef) {

  }

  MoveStart() {
    console.log('onMoveStart');
    let el = this.elRef.nativeElement.querySelector('#onMoveStart');
    this.fadeOut(el);
  }

  Move() {
    console.log('onMove');
    let el = this.elRef.nativeElement.querySelector('#onMove');
    this.fadeOut(el);
  }

  MoveDone() {
    console.log('onMoveDone');
    let el = this.elRef.nativeElement.querySelector('#onMoveDone');
    this.fadeOut(el);
  }

  Init() {
    console.log('onInit');
    let el = this.elRef.nativeElement.querySelector('#onInit');
    this.fadeOut(el);
  }

  Collapse() {
    console.log('onCollapse');
    let el = this.elRef.nativeElement.querySelector('#onCollapse');
    this.fadeOut(el);
  }

  Expand() {
    console.log('onExpand');
    let el = this.elRef.nativeElement.querySelector('#onExpand');
    this.fadeOut(el);
  }

  MidPoint() {
    console.log('onMidPoint');
    let el = this.elRef.nativeElement.querySelector('#onMidPoint');
    this.fadeOut(el);
  }

  fadeOut(el: HTMLElement){
    let clone:HTMLElement = <HTMLElement>el.cloneNode(true);
    clone.classList.remove('hidden');
    el.parentNode.replaceChild(clone, el);
  }
}
