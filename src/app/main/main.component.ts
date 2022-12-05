import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public Enteries: any;
  public idMain: any;

  constructor(private Service: ServiceService) {}
  ngOnInit(): void {
    this.Enteries = this.Service.Entry;
  }
}
