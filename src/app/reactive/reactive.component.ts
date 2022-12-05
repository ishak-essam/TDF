import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  form: FormGroup = new FormGroup({
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.maxLength(10)),
  });

  get emails() {
    return this.form.get('Email');
  }
  get Passwords() {
    return this.form.get('Password');
  }
}
