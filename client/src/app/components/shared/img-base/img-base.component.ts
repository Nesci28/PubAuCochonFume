import { OnInit, Directive } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Directive()
export class ImgBaseComponent extends BaseComponent implements OnInit {
  showFlag: boolean = false;
  selectedImageIndex: number = -1;
  currentIndex: number = -1;

  ngOnInit(): void {
    super.ngOnInit();
  }

  openImage(index: number): void {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }
}
