import { Component, OnInit } from '@angular/core';

import { ModalComponent } from './../modal.component';

@Component({
  selector: 'app-modal-text',
  templateUrl: './modal-text.component.html',
  styleUrls: ['./modal-text.component.scss'],
})
export class ModalTextComponent extends ModalComponent implements OnInit {
  text: string;

  ngOnInit(): void {
    this.text = this.info.data;
  }

  async save(): Promise<void> {
    this.error = false;
    if (!this.text) {
      this.error = true;
      return;
    }

    await super.save(this.text);
  }
}
