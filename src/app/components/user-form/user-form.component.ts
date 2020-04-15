import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  step = 1;
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      occupation: new FormControl(null),
      city: new FormControl(null),
      bio: new FormControl(null)
    });
    
  }

  // Proceed to next step
  nextStep() {
    this.step += 1;
  }

  // Go back to prev step
  prevStep() {
    this.step -= 1;
  }

  // Handle fields change
  handleChange(e){
    this.form.controls[e.input].setValue(e.value);
  } 



}
