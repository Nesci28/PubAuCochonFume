import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() imgSrc: string;
  @Input() headerTitle: string;
  @Input() headerText: string;
  @Input() headerInfo: { admin: boolean; componentId: string };
}
