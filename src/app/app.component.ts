import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PWDashboard';
  constructor(private  apiService: ApiService) {}

  ngOnInit(): void {
  }
}
export interface Raspo {
  name: string;
  status: string;
}
export interface Pic {
  id: number;
  name: string;
  sensorsNum: number;
  status: string;
  picAddress: string;
}
export interface Sensor {
  id: number;
  status: string;
}
export interface SMessage {
  deviceId: string;
  payload: {
    reciverAddress: string,
    action: string,
    pluggedDevice: string,
    data: number
  };
}
