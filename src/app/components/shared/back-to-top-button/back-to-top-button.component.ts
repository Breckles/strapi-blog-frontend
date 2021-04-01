import {
  Component,
  OnInit,
  HostListener,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.scss'],
})
export class BackToTopButtonComponent implements OnInit {
  visible = false;

  constructor(private hostElRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  toggleBackToTopButtonVisibility() {
    if (window.scrollY >= window.innerHeight) {
      this.renderer.addClass(this.hostElRef.nativeElement, 'visible');
    } else {
      this.renderer.removeClass(this.hostElRef.nativeElement, 'visible');
    }
    console.log('in scroll event');
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
