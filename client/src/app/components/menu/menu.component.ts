import { TemplatesService } from './../../services/templates.service';
import { StateService } from './../../services/state.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MenuType } from './../../interfaces/menu.enum';
import { Menu } from './../../interfaces/menu.interface';
import { BaseComponent } from '../shared/base/base.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends BaseComponent implements OnInit {
  _MenuType = MenuType;

  menu: Menu;
  menuCloned: Menu;
  mealType: MenuType = MenuType.VIANDES;
  menuKeys: string[];

  constructor(
    private router: Router,
    stateService: StateService,
    templatesService: TemplatesService
  ) {
    super(stateService, templatesService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    setTimeout(async () => {
      this.template = await this.getTemplate('menu');
      if (this.template?.data) {
        this.template = this.template.data;
        this.menu = this.template.menu;
        this.menuCloned = JSON.parse(JSON.stringify(this.menu));
        this.menuKeys = Object.keys(this.menu);
      }
    }, 0);
  }

  goToMenu(): void {
    this.router.navigate(['/menu/menu-pdf']);
  }

  async save(): Promise<void> {
    await this.templatesService.updateTemplate({
      templateId: 'menu',
      elementId: 'menu',
      data: this.menu,
    });
  }

  updateMenu(e): void {
    this.menu = e;
  }
}
