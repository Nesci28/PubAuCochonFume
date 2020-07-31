import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CropperComponent } from 'angular-cropperjs';

import { ImgType } from './../../../../interfaces/imgType.interface';
import { ModalComponent } from './../modal.component';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.scss'],
})
export class ModalImgComponent extends ModalComponent {
  @ViewChild('angularCropper', { static: false })
  angularCropper: CropperComponent;

  @Input() imgType: ImgType;

  imgForm: FormGroup = new FormGroup({
    img: new FormControl('', Validators.required),
  });

  ratio: number = 5;

  // CropperJS
  imageUrl: any;
  croppedImg: any;
  config = {
    responsive: true,
    aspectRatio: 16 / 5,
    zoomable: true,
    zoomOnWheel: true,
  };

  get img() {
    return this.imgForm.get('img');
  }

  upload(files: FileList) {
    if (this.angularCropper?.cropper) {
      this.angularCropper.cropper.destroy();
    }
    if (files.length === 0) return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    if (this.imgType === ImgType.HERO) {
      this.config.aspectRatio = 16 / 5;
    }
    if (this.imgType === ImgType.NORMAL) {
      delete this.config.aspectRatio;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageUrl = reader.result;
    };
  }

  async save(): Promise<void> {
    this.error = false;
    if (!this.imageUrl) {
      this.error = true;
      return;
    }
    this.imageUrl = this.angularCropper.cropper.getCroppedCanvas().toDataURL();

    await super.save(this.imageUrl);
  }

  changeRatio(type: 'increase' | 'decrease'): void {
    this.ratio = type === 'increase' ? this.ratio + 1 : this.ratio - 1;
    this.angularCropper.cropper.setAspectRatio(16 / this.ratio);
  }

  changeToFullScreen(): void {
    const imgMeta = this.angularCropper.cropper.getImageData();
    this.angularCropper.cropper.setAspectRatio(imgMeta.width / imgMeta.height);
    this.angularCropper.cropper.setCropBoxData({
      width: imgMeta.width,
      height: imgMeta.height,
    });
  }
}
