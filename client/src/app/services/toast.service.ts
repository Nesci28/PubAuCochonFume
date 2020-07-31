import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast): void {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  showStandard(text: string, delay?: number): void {
    this.show(text, {
      delay: delay || 10000,
    });
  }

  showSuccess(text: string, delay?: number): void {
    this.show(text, {
      classname: 'bg-success text-light',
      delay: delay || 10000,
    });
  }

  showDanger(text: string, delay?: number): void {
    this.show(text, {
      classname: 'bg-danger text-light',
      delay: delay || 10000,
    });
  }
}
