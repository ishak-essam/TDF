import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public Entry: any = [
    {
      id: '',
      coid: 0,
      room: 0,
      lastname: '',
      firstname: '',
      arrival: '',
      departure: '',
      night: 0,
      adult: 0,
      email: '',
      telephone: null,
      status: 0,
      calcstat: '',
      guestname: '',
      resno: 0,
      vip: null,
      source: '',
      nationality: '',
      passport: '',
      created_date: '',
      changed_date: '',
      arrtime: '',
      deptime: '',
      changehh: '',
      changemm: '',
      changepm: '',
    },
  ];
  Data: any = [];
  idServices: number = this.Entry.id;
  constructor(private http: HttpClient) {}
  private url: string = 'http:inv.egypto-soft.com/ihs/saudi/arrival';
  private url2: string = '../assets/Data.JSON';
  ngOnInit(): void {
    this.http.get(this.url2).subscribe((data) => {
      this.Data = data;
    });
  }
  GetItem(id: any) {
    id = this.idServices;
    this.Entry =
      this.Data.items[
        this.Data.items.findIndex((object: any) => object.id === id)
      ];
    return this.Entry;
  }
}
