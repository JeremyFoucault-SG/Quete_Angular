<<<<<<< HEAD
import { Directive, OnInit,  HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
  })
  export class HighlightDirective implements OnInit {
  
  @HostBinding('style.backgroundColor') myBackgroundColor:string;
  constructor() { }
  
  ngOnInit() {
  }
  
  @HostListener('mouseenter') mouseEnterEvent(eventData:Event) {
  this.myBackgroundColor = 'yellow';
  }
  
  @HostListener('mouseleave') mouseLeaveEvent(eventData:Event) {
  this.myBackgroundColor = 'transparent';
  }
  
}
=======
import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

@HostBinding('style.backgroundColor') myBackgroundColor:string;
constructor() { }

ngOnInit() {
}

@HostListener('mouseenter') mouseEnterEvent(eventData:Event) {
this.myBackgroundColor = 'yellow';
}

@HostListener('mouseleave') mouseLeaveEvent(eventData:Event) {
this.myBackgroundColor = 'transparent';
}

}
>>>>>>> 1d6411349a5f6d612701c2546e7216ead4f00756
