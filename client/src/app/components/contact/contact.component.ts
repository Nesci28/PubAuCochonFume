import { Component } from '@angular/core';
import { BaseComponent } from '../shared/base/base.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent extends BaseComponent {
  center: google.maps.LatLngLiteral = { lat: 46.345363, lng: -72.438671 };
  zoom: number = 15;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  ngOnInit(): void {
    super.ngOnInit();
    setTimeout(async () => {
      this.template = await this.getTemplate('contact');
      if (this.template?.data) {
        this.template = this.template.data;
      }
    }, 0);
  }
}
