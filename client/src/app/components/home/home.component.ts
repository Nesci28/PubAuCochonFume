import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

import { BaseComponent } from '../shared/base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit {
  @ViewChild('imgsContainer', { static: false }) imgsContainer: ElementRef;

  expandHoursIcon: string = '../../../assets/icons/plus.svg';
  expandHoursText: boolean = false;
  imgWidth: string;

  showFlag: boolean = false;
  selectedImageIndex: number = -1;
  currentIndex: number = -1;

  imageObject: Array<object> = [];

  @HostListener('window:resize', ['$event.target'])
  onResize() {
    this.setImgWidth();
  }

  async ngOnInit(): Promise<void> {
    super.ngOnInit();
    setTimeout(async () => {
      this.template = await this.getTemplate('home');
      if (this.template?.data) {
        this.template = this.template.data;
        this.setImgWidth();
        this.imageObject = this.template.images;
      }
    }, 0);
  }

  setImgWidth(): void {
    setTimeout(() => {
      this.imgWidth = Math.floor(
        this.imgsContainer.nativeElement.offsetWidth / 3 - 16
      ).toString();
    }, 1000);
  }

  expandHours(): void {
    this.expandHoursText = !this.expandHoursText;
    if (!this.expandHoursText) {
      this.expandHoursIcon = '../../../assets/icons/plus.svg';
    } else {
      this.expandHoursIcon = '../../../assets/icons/minus.svg';
    }
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
