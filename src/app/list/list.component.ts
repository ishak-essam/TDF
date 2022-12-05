import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Services/service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  Data: any = [];
  Datas: any = [];
  constructor(
    private http: HttpClient,
    private route: Router,
    private Service: ServiceService
  ) {}
  private url: string = 'http://inv.egypto-soft.com/ihs/saudi/arrival';
  private url2: string = '../assets/Data.JSON';
  ngOnInit(): void {
    this.http.get(this.url2).subscribe((data) => {
      this.Data = data;
    });
  }
  eventcl(pos: any) {
    this.Service.idServices = pos.id;
    this.Service.Entry = pos;
    console.log(
      this.Data.items.findIndex((object: any) => object.id === pos.id)
    );
    console.log(this.Service.idServices);
  }
}
