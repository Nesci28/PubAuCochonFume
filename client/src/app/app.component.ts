import { TemplatesService } from './services/templates.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';
import { StateService } from './services/state.service';
import { BaseComponent } from './components/shared/base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent implements OnInit {
  loading: boolean = true;

  constructor(
    private authService: AuthService,
    stateService: StateService,
    templatesService: TemplatesService
  ) {
    super(stateService, templatesService);
  }

  async ngOnInit(): Promise<void> {
    const token = this.authService.getToken();
    if (token) {
      this.authService.verifyJWT();
    }
    this.stateService.loading$
      .pipe(takeUntil(this.destroy$))
      .subscribe((loading: boolean) => {
        this.loading = loading;
      });
  }
}
