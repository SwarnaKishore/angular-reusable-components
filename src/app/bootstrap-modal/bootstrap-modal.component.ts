import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss']
})
export class BootstrapModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public showInfoModal(): void {
    $('#exampleModalCenter').modal('show');
  }

  public hideModal(): void {
      $('#exampleModalCenter').modal('hide');
  }

  public autoFocus(): void {
     $(document).ready(function () {
         $('#exampleModalCenter').on('shown.bs.modal', function () {
             console.log('autofocus');
             $('#modalOkButton').trigger('focus');
         });
     });
  }
}
