import { Component, Input, OnInit } from '@angular/core';

import {
  ImgOverlay,
  ImgOverlayText,
} from './../../../interfaces/imgInput.interface';

@Component({
  selector: 'app-img-overlay',
  templateUrl: './img-overlay.component.html',
  styleUrls: ['./img-overlay.component.scss'],
})
export class ImgOverlayComponent implements OnInit {
  @Input() img: ImgOverlay;
  @Input() text: ImgOverlayText;
  @Input() routerLinkStr: string;
  @Input() imgOverlayInfo: { admin: boolean; componentId: string };

  hash: string;

  ngOnInit(): void {
    this.hash = this.hashCode(this.img.src);
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
}
