import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/base/base.component';

@Component({
  selector: 'app-notre-equipe',
  templateUrl: './notre-equipe.component.html',
  styleUrls: ['./notre-equipe.component.scss'],
})
export class NotreEquipeComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    this.setTitle('Notre Équipe');
  }
}
