import { Title } from '@angular/platform-browser';
import { TemplatesService } from './../../../services/templates.service';
import { StateService } from './../../../services/state.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';

@Component({
  selector: 'app-menu-show',
  templateUrl: './menu-show.component.html',
  styleUrls: ['./menu-show.component.scss'],
})
export class MenuShowComponent extends BaseComponent
  implements OnInit, OnDestroy {
  zoom: string = 'auto';
  loading: boolean = true;

  constructor(
    stateService: StateService,
    templatesService: TemplatesService,
    titleService: Title
  ) {
    super(stateService, templatesService, titleService);
  }

  ngOnInit(): void {
    let timer: number;
    super.ngOnInit();
    this.setTitle('Menu PDF');
    setTimeout(async () => {
      this.template = await this.getTemplate('menuShow');
      timer = setInterval(() => {
        const numberOfParentEle = document.querySelectorAll('.page').length;
        const numberOfLoadingIcons = document.querySelectorAll('.loadingIcon')
          .length;
        if (numberOfParentEle > numberOfLoadingIcons) {
          clearInterval(timer);
          this.loading = false;
        }
      }, 100);
      if (this.template?.data) {
        this.template = this.template.data;
      }
      const ele: any = document.querySelector('.main');
      ele.style.padding = '67px 0 0 0';
    }, 0);
  }

  ngOnDestroy(): void {
    const ele: any = document.querySelector('.main');
    ele.style.padding = '67px 0 89px 0';
  }
}
