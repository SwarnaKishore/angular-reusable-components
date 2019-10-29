import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss']
})
export class BootstrapModalComponent implements OnInit {

  @Input() modalId: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    if (!this.modalId) {
      this.modalId = 'sampleModal';
    }

    if (!this.title) {
      this.title = 'Modal Title';
    }
  }

  public showInfoModal(): void {
    $('#' + this.modalId).modal('show');
  }

  public hideModal(): void {
      $('#' + this.modalId).modal('hide');
  }

  public autoFocus(): void {
     $(document).ready(() => {
         $('#' + this.modalId).on('shown.bs.modal', () => {
             $('#modalButton').trigger('focus');
         });
     });
  }
}
