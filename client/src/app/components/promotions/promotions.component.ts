import { ImgBaseComponent } from './../shared/img-base/img-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent extends ImgBaseComponent implements OnInit {
  imageObject: Array<object> = [];

  ngOnInit(): void {
    super.ngOnInit();
    this.setTitle('Promotions');
    setTimeout(async () => {
      this.template = await this.getTemplate('promotions');
      if (this.template?.data) {
        this.template = this.template.data;
        this.imageObject = this.template.images;
      }
    }, 0);
  }
}
