import { ModalTextComponent } from './../components/shared/modal/modal-text/modal-text.component';
import { Directive, Input, OnChanges, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalImgComponent } from './../components/shared/modal/modal-img/modal-img.component';
import { ImgType } from './../interfaces/imgType.interface';

@Directive({
  selector: '[appEdit]',
})
export class EditDirective implements OnChanges {
  @Input() editInfo: {
    id: string;
    admin: boolean;
    componentId: string;
    data?: string;
  };

  constructor(private renderer: Renderer2, private modalService: NgbModal) {}

  ngOnChanges(): void {
    if (this.editInfo.admin) {
      const parent = document.querySelector(`#${this.editInfo.id}`);
      this.renderer.setAttribute(parent, 'class', 'position-relative w-100');

      const button = this.renderer.createElement('button');
      const buttonText = this.renderer.createText('Modifier');
      this.renderer.appendChild(button, buttonText);
      this.renderer.setAttribute(
        button,
        'class',
        'btn btn-info position-absolute'
      );
      this.renderer.setAttribute(button, 'id', this.hashCode(this.editInfo.id));
      this.renderer.setAttribute(button, 'style', 'top:0; right: 0;');
      button.addEventListener('click', this.edit.bind(this));

      this.renderer.appendChild(parent, button);
    }
  }

  hashCode(str) {
    return str
      .split('')
      .reduce(
        (prevHash, currVal) =>
          ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
        0
      );
  }

  edit(): void {
    event.stopPropagation();
    if (this.editInfo.id.toLowerCase().includes('img')) {
      const imgType = this.editInfo.id.toLowerCase().includes('hero')
        ? ImgType.HERO
        : ImgType.NORMAL;

      const modalRef = this.modalService.open(ModalImgComponent, {
        centered: true,
        backdrop: 'static',
      });
      modalRef.componentInstance.imgType = imgType;
      modalRef.componentInstance.info = {
        id: this.editInfo.id,
        componentId: this.editInfo.componentId,
      };
    } else {
      const modalRef = this.modalService.open(ModalTextComponent, {
        centered: true,
        backdrop: 'static',
      });
      console.log('this.editInfo.data :>> ', this.editInfo.data);
      modalRef.componentInstance.info = {
        id: this.editInfo.id,
        componentId: this.editInfo.componentId,
        data: this.editInfo.data,
      };
    }
  }
}
