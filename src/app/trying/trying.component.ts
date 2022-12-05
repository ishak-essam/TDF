import { Component } from '@angular/core';

@Component({
  selector: 'app-trying',
  templateUrl: './trying.component.html',
  styleUrls: ['./trying.component.css'],
})
export class TryingComponent {
  title = 'TDF';
  sex: any = ['Male', 'Female'];
  ICon: boolean = true;
  Emails(FristName: any) {
    console.log(FristName);
  }
  name = 'Angular Template Driven Form With Validation';

  log(x: any) {
    console.log(x);
  }
  submit(myForm: any) {
    alert(myForm);
    console.log(myForm);
  }
  Total(ex: any) {
    console.log(ex);
  }
}
