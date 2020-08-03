import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

import { StateService } from './../../../services/state.service';
import { TemplatesService } from './../../../services/templates.service';

@Directive()
export abstract class BaseComponent implements OnInit, OnDestroy {
  private readonly destroySubject = new Subject();
  public readonly destroy$ = this.destroySubject.asObservable();

  public admin: boolean;
  public template: any;

  constructor(
    public stateService: StateService,
    public templatesService: TemplatesService,
    public titleService: Title
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

  setTitle(title: string): void {
    const currentTitle = this.titleService.getTitle().split('|')[0];
    this.titleService.setTitle(`${currentTitle} | ${title}`);
  }
}
