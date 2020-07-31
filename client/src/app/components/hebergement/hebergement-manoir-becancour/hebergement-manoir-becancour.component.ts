import { Component, OnInit } from '@angular/core';

import { ImgBaseComponent } from './../../shared/img-base/img-base.component';

@Component({
  selector: 'app-hebergement-manoir-becancour',
  templateUrl: './hebergement-manoir-becancour.component.html',
  styleUrls: ['../../shared/img-base/img-base.component.scss'],
})
export class HebergementManoirBecancourComponent extends ImgBaseComponent
  implements OnInit {
  imageObject: Array<object> = [];

  ngOnInit(): void {
    super.ngOnInit();
    setTimeout(async () => {
      this.template = await this.getTemplate('hébergementManoirBécancour');
      if (this.template?.data) {
        this.template = this.template.data;
        this.imageObject = this.template.images;
      }
    }, 0);
  }
}
