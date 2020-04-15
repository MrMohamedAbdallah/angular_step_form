import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Output("nextStep") nextStep: EventEmitter<any> = new EventEmitter();
  @Output("prevStep") prevStep: EventEmitter<any> = new EventEmitter();
  @Input("values") values;

  constructor() { }

  ngOnInit(): void {
  }

}
