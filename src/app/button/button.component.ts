import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() classType: string;
  @Input() size: string;
  @Input() style: string;
  @Input() backgroundColor: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
