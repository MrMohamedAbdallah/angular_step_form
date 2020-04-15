import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-personal-details',
  templateUrl: './form-personal-details.component.html',
  styleUrls: ['./form-personal-details.component.scss']
})
export class FormPersonalDetailsComponent implements OnInit {

  @Output("nextStep") nextStep: EventEmitter<any> = new EventEmitter();
  @Output("prevStep") prevStep: EventEmitter<any> = new EventEmitter();
  @Output("handleChange") handleChange: EventEmitter<any> = new EventEmitter();
  @Input("values") values;

  constructor() { }

  ngOnInit(): void {
  }

  change(input, e){
    this.handleChange.next({
      input: input,
      value: e.target.value
    })
  }

}
