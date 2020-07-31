import { TemplatesService } from './templates.service';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { BackendResponse } from 'src/app/interfaces/backendResponse.interface';
import { StateService } from './state.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseComponent } from '../components/shared/base/base.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseComponent {
  constructor(
    private httpClient: HttpClient,
    private toastService: ToastService,
    private router: Router,
    stateService: StateService,
    templatesService: TemplatesService
  ) {
    super(stateService, templatesService);
  }

  async login(username: string, password: string): Promise<void> {
    this.stateService.loading$.next(true);
    this.httpClient
      .get(`${environment.url}/auth/login?u=${username}&p=${password}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res: BackendResponse) => {
          localStorage.setItem('token', res.data);
          this.toastService.showSuccess('Bienvenue!');
          this.stateService.admin$.next(true);
          this.router.navigate(['/']);
        },
        (_) => {
          this.toastService.showDanger('Mauvaise informations');
        },
        () => {
          this.stateService.loading$.next(false);
        }
      );
  }

  verifyJWT(): void {
    this.httpClient
      .get(`${environment.url}/auth/jwt`)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (_) => {
          this.stateService.admin$.next(true);
        },
        (_) => {}
      );
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
