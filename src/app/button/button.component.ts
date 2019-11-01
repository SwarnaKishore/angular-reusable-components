import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() id: string;
  @Input() classType: string;
  @Input() backgroundColor: string;
  @Input() color: string;
  @Input() disabled: boolean;
  @Input() radius: string;

  constructor() { }

  ngOnInit() {
  }

}
