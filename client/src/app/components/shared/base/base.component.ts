import { TemplatesService } from './../../../services/templates.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { StateService } from './../../../services/state.service';
import { OnDestroy, Directive, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnInit, OnDestroy {
  private readonly destroySubject = new Subject();
  public readonly destroy$ = this.destroySubject.asObservable();

  public admin: boolean;
  public template: any;

  constructor(
    public stateService: StateService,
    public templatesService: TemplatesService
  ) {}

  ngOnInit(): void {
    this.stateService.admin$
      .pipe(takeUntil(this.destroy$))
      .subscribe((admin: boolean) => {
        this.admin = admin;
      });
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
  }

  async getTemplate(componentId: string): Promise<any> {
    return this.templatesService.getTemplate(componentId);
  }
}
