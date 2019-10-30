import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss']
})
export class BootstrapModalComponent implements OnInit, OnChanges {

  @Input() modalId: string;
  @Input() title: string;
  @Input() triggerModal: boolean;
  @Input() primaryButtonName: string;
  @Input() secondaryButtonName: string;
  @Input() autoFocusPrimaryBtn: boolean;
  @Input() autoFocusSecondaryBtn: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.modalId) {
      this.modalId = 'sampleModal';
    }

    if (!this.title) {
      this.title = 'Modal Title';
    }

    if (this.autoFocusPrimaryBtn && this.primaryButtonName) {
      this.autoFocus('primary-button');
    }

    if (this.autoFocusSecondaryBtn && this.secondaryButtonName) {
      this.autoFocus('secondary-button');
    }

  //   if (changes.triggerModal) {
  //     $(document).ready(function(modalId) {
  //       if (changes.triggerModal.currentValue) {
  //         $('#' + modalId).modal('show');
  //       } else if (changes.triggerModal.previousValue && changes.triggerModal.currentValue === false) {
  //         $('#' + modalId).modal('hide');
  //       }
  //     } (this.modalId));
  //   }
  // }
  }

  public showModal(modalId: string = null): void {
    modalId = modalId ? modalId : 'sampleModal';
    $('#' + modalId).modal('show');
  }

  // public hideModal(modalId: string): void {
  //     $('#' + modalId).modal('hide');
  // }

  public autoFocus(elementId: string): void {
     $(document).ready(() => {
         $('#' + this.modalId).on('shown.bs.modal', () => {
             $('#' + elementId).trigger('focus');
         });
     });
  }
}
