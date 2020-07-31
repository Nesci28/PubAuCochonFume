import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild('navContent1') navContent1: ElementRef;
  _opened1 = true;
  maxHeight1: number;

  constructor(public router: Router) {}

  async collapse1(v: boolean): Promise<void> {
    if (v) {
      this._opened1 = !this._opened1;
    }
    if (!v) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      this.router.navigate(['/hebergement']);
    }
    this.maxHeight1 = !this._opened1
      ? this.navContent1.nativeElement.offsetHeight + 16
      : 0;
  }
}
