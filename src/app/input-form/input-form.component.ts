import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  datas(ex: any) {
    console.log(ex.value);
  }
}
