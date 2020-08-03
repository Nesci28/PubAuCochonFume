import { Title } from '@angular/platform-browser';
import { TemplatesService } from './../../../services/templates.service';
import { EditObject } from './../../../interfaces/editObject.interface';
import { Directive } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BaseComponent } from '../base/base.component';
import { StateService } from './../../../services/state.service';

@Directive()
export class ModalComponent extends BaseComponent {
  info: { id: string; componentId: string; data?: string };
  error: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    stateService: StateService,
    templatesService: TemplatesService,
    titleService: Title
  ) {
    super(stateService, templatesService, titleService);
  }

  async save(data: any): Promise<void> {
    this.error = false;
    if (!data) {
      this.error = true;
      return;
    }

    const editObject: EditObject = {
      templateId: this.info.componentId,
      elementId: this.info.id,
      data: data,
    };

    await this.templatesService.updateTemplate(editObject);
    this.activeModal.close();
  }
}
