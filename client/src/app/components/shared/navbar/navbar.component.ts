import { ToastService } from './../../../services/toast.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { BaseComponent } from '../base/base.component';
import { StateService } from './../../../services/state.service';
import { TemplatesService } from './../../../services/templates.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends BaseComponent {
  @ViewChild('navContent1') navContent1: ElementRef;
  _opened1 = true;
  maxHeight1: number;

  constructor(
    public router: Router,
    private toastService: ToastService,
    stateService: StateService,
    templatesService: TemplatesService,
    titleService: Title
  ) {
    super(stateService, templatesService, titleService);
  }

  async collapse1(v: boolean): Promise<void> {
    if (v) {
      this._opened1 = !this._opened1;
    }
    if (!v) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    this.maxHeight1 = !this._opened1
      ? this.navContent1.nativeElement.offsetHeight + 16
      : 0;
  }

  logout(): void {
    this.toastService.showSuccess('Aurevoir!');
    localStorage.setItem('token', '');
    this.stateService.admin$.next(false);
    window.location.reload();
  }
}
