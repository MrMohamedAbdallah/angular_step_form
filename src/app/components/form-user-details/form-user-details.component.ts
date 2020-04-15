import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-form-user-details',
  templateUrl: './form-user-details.component.html',
  styleUrls: ['./form-user-details.component.scss']
})
export class FormUserDetailsComponent implements OnInit {

  @Output("nextStep") nextStep: EventEmitter<any> = new EventEmitter();
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
