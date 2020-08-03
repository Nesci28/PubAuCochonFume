import { Component, OnInit } from '@angular/core';

import { ImgBaseComponent } from './../../shared/img-base/img-base.component';

@Component({
  selector: 'app-hebergement-hebert-hotel',
  templateUrl: './hebergement-hebert-hotel.component.html',
  styleUrls: ['../../shared/img-base/img-base.component.scss'],
})
export class HebergementHebertHotelComponent extends ImgBaseComponent
  implements OnInit {
  imageObject: Array<object> = [];

  ngOnInit(): void {
    super.ngOnInit();
    this.setTitle('Hébert Hotel');
    setTimeout(async () => {
      this.template = await this.getTemplate('hébergementHotelHébert');
      if (this.template?.data) {
        this.template = this.template.data;
        this.imageObject = this.template.images;
      }
    }, 0);
  }
}
