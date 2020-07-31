import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    super.ngOnInit();
    setTimeout(async () => {
      this.template = await this.getTemplate('footer');
      if (this.template?.data) {
        this.template = this.template.data;
      }
    }, 0);
  }
}
