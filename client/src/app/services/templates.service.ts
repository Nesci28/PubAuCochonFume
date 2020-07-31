import { EditObject } from './../interfaces/editObject.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BackendResponse } from '../interfaces/backendResponse.interface';
import { environment } from './../../environments/environment';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  constructor(
    private httpClient: HttpClient,
    private stateService: StateService
  ) {}

  async getTemplate(componentId: string): Promise<BackendResponse> {
    this.stateService.loading$.next(true);
    const res = (await this.httpClient
      .get(`${environment.url}/templates?templateId=${componentId}`)
      .toPromise()) as BackendResponse;

    this.stateService.loading$.next(false);
    return res;
  }

  async updateTemplate(editObject: EditObject): Promise<BackendResponse> {
    this.stateService.loading$.next(true);
    const res = (await this.httpClient
      .post(`${environment.url}/templates`, editObject)
      .toPromise()) as BackendResponse;
    this.stateService.loading$.next(false);
    return res;
  }
}
