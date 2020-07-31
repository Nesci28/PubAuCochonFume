import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { BaseComponent } from '../shared/base/base.component';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss'],
})
export class HebergementComponent extends BaseComponent implements OnInit {
  @ViewChild('imgsContainer', { static: true }) imgsContainer: ElementRef;

  imgWidth: string;

  @HostListener('window:resize', ['$event.target'])
  onResize() {
    this.setImgWidth();
  }

  ngOnInit(): void {
    super.ngOnInit();
    setTimeout(async () => {
      this.template = await this.getTemplate('hébergement');
      if (this.template?.data) {
        this.template = this.template.data;
        this.setImgWidth();
      }
    }, 0);
  }

  setImgWidth(): void {
    this.imgWidth = Math.floor(
      this.imgsContainer.nativeElement.offsetWidth / 2 - 16
    ).toString();
  }
}
