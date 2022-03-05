import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective implements OnInit, OnChanges {
  @Input('appHighLight') dcolor = 'grey';
  @Input() hcolor = 'white';
  @HostListener('mouseenter')
  changeColor() {
    this.elm.nativeElement.style.backgroundColor = this.hcolor;
  }
  @HostListener('mouseleave')
  changeColortoDefault() {
    this.elm.nativeElement.style.backgroundColor = this.dcolor;
  }
  constructor(private elm: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.elm.nativeElement.style.backgroundColor = this.dcolor;
  }
  ngOnInit(): void {
    this.elm.nativeElement.style.backgroundColor = this.dcolor;
  }
}
