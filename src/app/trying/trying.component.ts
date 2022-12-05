import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'trying',
  templateUrl: './trying.component.html',
  styleUrls: ['./trying.component.css'],
})
export class TryingComponent {
  title = 'TDF';
  sex: any = ['Male', 'Female'];
  ICon: boolean = true;
  Emails(FristName: any) {
    console.log(FristName.value);
  }
  name = 'Angular Template Driven Form With Validation';

  UserAccount = new User(
    'Isaac',
    'Essam',
    'ishakessam122@gmail.com',
    'Ishak12345#',
    'Male'
  );
  log(x: any) {
    console.log(x.value);
  }
  submit(myForm: any) {
    alert(myForm.value);
    console.log(myForm.value);
  }
  Total(ex: any) {
    console.log(ex.value);
  }
}
