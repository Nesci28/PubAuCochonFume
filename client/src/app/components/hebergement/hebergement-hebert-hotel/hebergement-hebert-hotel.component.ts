import { TemplatesService } from './../../../services/templates.service';
import { StateService } from './../../../services/state.service';
import { ImgBaseComponent } from './../../shared/img-base/img-base.component';
import { Component, OnInit } from '@angular/core';

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
    setTimeout(async () => {
      this.template = await this.getTemplate('hébergementHotelHébert');
      if (this.template?.data) {
        this.template = this.template.data;
        this.imageObject = this.template.images;
      }
    }, 0);
  }
}
