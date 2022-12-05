import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { SpaceName } from './Spaces';
import { Ends } from './emailend';
import { PasswordKeyWord } from './emailend';
@Component({
  selector: 'reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  form: FormGroup = new FormGroup({
    Email: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(5),
      Ends.EmailEnds,
    ]),
    Password: new FormControl('', [
      Validators.required,
      PasswordKeyWord.PasswordKeyWords,
    ]),
  });

  get emails() {
    return this.form.get('Email');
  }
  get Passwords() {
    return this.form.get('Password');
  }
}
